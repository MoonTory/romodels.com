import { Router } from 'express';

import importRouters from './helpers/importRouters';

export class TsukiApi extends Router {
  constructor() {
    super();

    this.path = '/api';
    this.config();
  }

  config = async () => {
    this.initRouters(await importRouters());
  };

  initRouters = routers => {
    routers.forEach(el => {
      this.use(this.path, el.router);
    });
  };
}
