import joi from 'joi';

/**
 * Validate a payload using a Joi Schema.
 * @param payload Object that is to be validated.
 * @param schema Joi Schema to validate against.
 * @returns payload that has been correctly validated
 */
export default (payload, schema) => {
  console.log('payload', payload);

  const result = joi.validate(payload, schema);
  console.log('joi validate result', result.value);

  if (result.error) {
    return false;
  }

  return result.value;
};
