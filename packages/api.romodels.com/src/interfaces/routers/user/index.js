import { Router } from 'express';

class UserRouter extends Router {
  constructor() {
    super();

    this.path = '/user';
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

export const router = new UserRouter();
