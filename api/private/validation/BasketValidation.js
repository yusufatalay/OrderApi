
import Joi from 'joi';

export const validate_item = (item) => {
	const item_schema = Joi.object({
		ownerid: Joi.number()
			.min(1)
			.required(),
		productid: Joi.number()
			.min(1)
			.required(),
		productamount: Joi.number()
			.min(1)
			.required()
	});

	const result = item_schema.validate(item);

	if (result.error) {
		return { message: result.error.details[0].message, type: false };
	}
	return true;
}