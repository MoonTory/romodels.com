import { Router } from 'express';

export default class RootRouter extends Router {
  constructor(name) {
    super();

    this.cntrlName = name;
    this.path = '/';
    this.initRoutes();
  }

  initRoutes = () => {
    console.log('Initializing "' + this.cntrlName + '" router @ ' + this.path);
    this.route(this.path).get((req, res, next) => {
      res.status(200).json({
        message: `This is the ${this.path} router`
      });
    });
  };
}
