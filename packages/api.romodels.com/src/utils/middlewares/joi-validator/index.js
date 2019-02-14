import joi from 'joi';
import Schemas from './joi-schemas';

export default {
  validateBody: schema => {
    return (req, res, next) => {
      console.log('req.body', req.body);
      const result = joi.validate(req.body, schema);
      console.log('joi validate result', result.value);

      if (result.error) {
        next(result.error);
      }

      if (!req.value) {
        req.value = {};
      }

      req.value['body'] = result.value;
      next();
    };
  },

  Schemas
};
