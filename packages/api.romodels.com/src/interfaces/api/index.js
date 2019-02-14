import { Router } from 'express';

import { importRouters } from '@/infra/helpers';

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
    routers.forEach(router => {
      this.use(this.path, router);
    });
  };
}
