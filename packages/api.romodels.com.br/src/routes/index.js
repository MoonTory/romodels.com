import { Router } from 'express';

import { joiValidator } from '../utils/middlewares';
import { AuthController } from '../controllers';
import usersRouter from './user';
import modelsRouter from './model';

const { validateBody, Schemas } = joiValidator;

export class api extends Router {
  constructor(redis) {
    super();
    this.redis = redis;

    this.use('/user', usersRouter);

    this.use('/model', modelsRouter);

    this.route('/register').post(validateBody(Schemas.registerSchema), AuthController.register(this.redis));

    this.route('/login').post(validateBody(Schemas.authSchema), AuthController.localAuth, AuthController.login);

    this.route('/confirm/:id').get(AuthController.confirmEmailCallback(this.redis));

    this.route('/resendConfirm').post(
      validateBody(Schemas.validEmail),
      AuthController.resendEmailConfirmationCallback(this.redis)
    );
  }
}
