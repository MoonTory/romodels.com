import { Router } from 'express';

import { joiValidator } from '../utils/middlewares';
import usersRouter from './user';
import { AuthController } from '../controllers';

const { validateBody, Schemas } = joiValidator;

export class api extends Router {
  constructor(redis) {
    super();
    this.redis = redis;

    this.use('/user', usersRouter);

    this.route('/register').post(validateBody(Schemas.registerSchema), AuthController.register(this.redis));

    this.route('/login').post(validateBody(Schemas.authSchema), AuthController.localAuth, AuthController.login);

    this.route('/confirm/:id').get(AuthController.confirmEmailCallback(this.redis));

    this.route('/resendConfirm').post(validateBody(Schemas.validEmail), AuthController.resendEmailConfirmationCallback(this.redis));
  }
}
