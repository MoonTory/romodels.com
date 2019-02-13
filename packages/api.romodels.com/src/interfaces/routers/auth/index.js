import { Router } from 'express';

class AuthRouter extends Router {
  constructor() {
    super();

    this.path = '/auth';
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

export const router = new AuthRouter();
