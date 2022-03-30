import Joi from 'joi';

export const validate_register = (user) => {

	const register_schema = Joi.object({
		first_name: Joi.string()
			.alphanum()
			.min(1)
			.required(),
		last_name: Joi.string()
			.alphanum()
			.min(1)
			.required(),
		email: Joi.string()
			// eslint-disable-next-line no-control-regex
			.email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
		password: Joi.string()
			/*
			 * Minimum eight characters, 
			 * at least one upper case English letter, 
			 * one lower case English letter,
			 *  one number and one special character
			 */
			//.pattern(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$'))
			.required()
	});

	const result = register_schema.validate(user);
	if (result.error) {
		return { message: result.error.details[0].message, type: false };
	}
	return true;

};

export const validate_login = (user) => {
	const login_schema = Joi.object({

		email: Joi.string()
			// eslint-disable-next-line no-control-regex
			.email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
		password: Joi.string()
			/*
			 * Minimum eight characters, 
			 * at least one upper case English letter, 
			 * one lower case English letter,
			 *  one number and one special character
			 */
			//.pattern(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$'))
			.required()
	});
	const result = login_schema.validate(user);
	if (result.error) {
		return { message: result.error.details[0].message, type: false };
	}
	return { message: 'validated', type: true };
};
