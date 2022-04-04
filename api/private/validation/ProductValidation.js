import Joi from "joi";

export const validate_product = (product) => {
	const product_schema = Joi.object({
		name: Joi.string()
			.alphanum()
			.min(1)
			.required(),
		price: Joi.number()
			.required(),
		sub_category_id: Joi.number()
			.required()
	});

	const result = product_schema.validate(product);

	if (result.error) {
		return { message: result.error.details[0].message, type: false };
	}
	return true;
};