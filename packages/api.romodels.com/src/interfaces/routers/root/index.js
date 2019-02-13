import { Router } from 'express';

class RootRouter extends Router {
  constructor() {
    super();

    this.path = '/';
    this.initRoutes();
  }

  initRoutes = () => {
    this.route(this.path).get((req, res, next) => {
      res.status(200).json({
        message: `This is the ${this.path} router`
      });
    });
  };
}

export const router = new RootRouter();
