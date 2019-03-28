import { Router } from 'express';

import { ModelController } from '../../controllers';
import { multer } from '../../utils/middlewares';

const router = Router();

router.route('/create').post(multer.array('files', 5), ModelController.create);

router.route('/become-a-model').post(multer.array('files', 2), ModelController.becomeModel);

export default router;
