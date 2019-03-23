export default {
  // Creat Controller Middleware
  create: (req, res, next) => {
    res.status(200).json({
      message: `Users-Controller handling GET request to ${req.baseUrl}`
    });
  }
};
