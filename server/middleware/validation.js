import Joi from 'joi';
//register validation

export const registerValidation = (data) => {
	const validationSchema = Joi.object({
		firstname: Joi.string().min(2).required(),
		lastname: Joi.string().min(2).required(),

		email: Joi.string().min(6).required().email(),
		password: Joi.string().min(6).required()
	});
	return validationSchema.validate(data);
};

//login validation
export const loginValidation = (data) => {
	const validationSchema = Joi.object({
		email: Joi.string().min(6).required().email(),
		password: Joi.string().min(6).required()
	});
	return validationSchema.validate(data);
};
