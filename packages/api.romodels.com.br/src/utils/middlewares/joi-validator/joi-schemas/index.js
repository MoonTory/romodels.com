import joi from 'joi';

export default {
  registerSchema: joi.object().keys({
    username: joi.string().required(),
    email: joi
      .string()
      .email()
      .required(),
    password: joi.string().required()
  }),
  authSchema: joi.object().keys({
    email: joi
      .string()
      .email()
      .required(),
    password: joi.string().required()
  }),
  googleAuthSchema: joi.object().keys({
    access_token: joi.string().required()
  }),
  validEmail: joi.object().keys({
    email: joi
      .string()
      .email()
      .required()
  }),
  modelSchema: joi.object().keys({
    name: joi.object({
      first_name: joi.string(),
      last_name: joi.string(),
      full_name: joi.string()
    }),
    sex: joi
      .string()
      .valid('male', 'female')
      .required(),
    category: joi
      .array()
      .items(joi.string())
      .required(),
    medidas: joi
      .object({
        altura: joi.string(),
        busto: joi.string(),
        cintura: joi.string(),
        quadril: joi.string(),
        torax: joi.string(),
        ternobusto: joi.string(),
        manequim: joi.string(),
        sapatos: joi.string(),
        olhos: joi.string(),
        cabelos: joi.string()
      })
      .required()
  })
};
