import Plan from '../models/Plan.js';
import User from '../models/User.js';

export const getPlans = async (req, res, next) => {
	try {
		const plans = await Plan.find({ 'user.id': req.params.userId });
		if (plans.length === 0) {
			res.status(400).send('please create a plan');
		} else {
			res.status(200).json(plans);
		}
	} catch (err) {
		next(err);
	}
};
export const getPlan = async (req, res, next) => {
	try {
		const plan = await Plan.findById(req.params.planId);
		res.status(200).json(plan);
	} catch (error) {
		next(err);
	}
};
export const createPlans = async (req, res, next) => {
	const planObject = req.body;
	delete planObject.data.common.tracking;
	const useId = { id: req.params.id };
	const newPlan = { any: planObject, user: useId };

	try {
		const verifyUser = await User.findById(req.params.id);
		if (Object.keys(verifyUser).length === 0) {
			res.status(500).send('user not fould');
		} else {
			await new Plan(newPlan).save();
			res.status(200).send('plan create');
		}
	} catch (err) {
		next(err);
	}
};
export const deletePlans = async (req, res, next) => {
	const planId = req.params.id;
	try {
		await Plan.findByIdAndDelete({ _id: planId });
		res.status(200).send('Plan Deleted');
	} catch (err) {
		next(err);
	}
};
