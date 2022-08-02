import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { registerValidation, loginValidation } from '../middleware/validation.js';
import User from '../models/User.js';

export const register = async (req, res, next) => {
	try {
		//validate the user register form input
		const { error } = registerValidation(req.body);
		if (error) return res.status(400).send(err.details[0].message);
		const emailExist = await User.findOne({ email: req.body.email });
		if (emailExist) return res.status(400).send('Email already exists');
		//random salt keyword
		const salt = await bcrypt.genSalt(10);
		//generate hash password
		const hashPassword = await bcrypt.hash(req.body.password, salt);
		//store the user into user object ready to save to the database
		const user = new User({
			...req.body,
			password: hashPassword
		});
		await user.save();
		res.status(200).send('User created');
	} catch (err) {
		next(err);
	}
};

export const logIn = async (req, res, next) => {
	try {
		//validate user email and password check for scripting
		const { error } = loginValidation(req.body);
		if (error) return res.status(400).send(error.details[0].message);
		const user = await User.findOne({ email: req.body.email });
		if (!user) return res.status(400).send('Email is not found');
		const validPass = await bcrypt.compare(req.body.password, user.password);
		if (!validPass) return res.status(400).send('Invalid password');
		const token = jwt.sign({ _id: user._id }, process.env.JWT_KEY);
		res.header('auth-token', token).status(200).json({
			message: 'Auth successful',
			token: token,
			id: user._id
		});
	} catch (err) {
		next(err);
	}
};

export const userDelete = async (req, res, next) => {
	try {
		await User.findByIdAndDelete({ _id: req.params.userId });
		res.status(200).json('User Deleted');
	} catch (err) {
		next(err);
	}
};

export const getUsers = async (req, res, next) => {
	try {
		const users = await User.find();
		res.status(200).json(users);
	} catch (err) {
		next(err);
	}
};
export const getUser = async (req, res, next) => {
	try {
		const user = await User.findById(req.params.userId);
		res.status(200).json(user);
	} catch (err) {
		next(err);
	}
};
export const verifyUserEmail = async (req, res, next) => {
	try {
		const userEmail = await User.findOne({ email: req.params.email });
		if (userEmail === null) {
			res.status(400).send('user email has not been register.');
		} else {
			res.status(200).send('user email is valid.');
		}
	} catch (err) {
		next(err);
	}
};
