import { Router } from 'express';
import { UsersController, AuthController } from '../../controllers';

const router = Router();

router.route('/')
  .get(UsersController.index);

router.route('/secret')
  .get(AuthController.jwtAuth, UsersController.secret);

export default router;