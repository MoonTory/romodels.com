export default {

  // Index Controller Middleware
  index: (req, res, next) => {
    res.status(200).json({
      message: `Users-Controller handling GET request to ${req.baseUrl}`
    });
  },

  // Secret Controler Middleware
  secret: async (req, res, next) => {
    console.log('Success!!');
    res.status(200).json({
      message: `Users-Controller handling secret GET request to ${req.baseUrl}`
    });
  },

}