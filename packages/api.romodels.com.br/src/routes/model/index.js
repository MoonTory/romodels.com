import { Router } from 'express';
import { ModelController } from '../../controllers';

const router = Router();

router.route('/create').post(ModelController.create);

export default router;
