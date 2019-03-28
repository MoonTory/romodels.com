import { ModelService, CloudinaryService } from '../../services';

export default {
  // Create Controller Middleware
  create: async (req, res, next) => {
    try {
      // const tmp = ['Henlo', 'Guis'];
      // const payload = await ModelService.createModelo(tmp);
      // console.log('req.body', req.body);
      // console.log('req.files', req.files);

      const photos = await CloudinaryService.uploadFiles(req.files);

      console.log('photos', photos);
      req.body.files = photos;

      console.log('req.body', req.body);

      console.log('req.body.category', req.body.category);

      const payload = await ModelService.createModel(req.body);

      res.status(200).json({
        message: `Users-Controller handling GET request to ${req.baseUrl}`,
        payload: payload
      });
    } catch (error) {
      next(error);
    }
  },

  // Become A Mdoel endpoint controller
  becomeModel: async (req, res, next) => {
    try {
      const tmp = ['Henlo', 'Guis'];
      const payload = await ModelService.createModelo(tmp);

      res.status(200).json({
        message: `Users-Controller handling GET request to ${req.baseUrl}`,
        payload: payload
      });
    } catch (error) {
      next(error);
    }
  }
};
