/**
 * Node_Module dependencies.
 */
import express, { urlencoded, json } from 'express';
// import Redis from 'ioredis';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

/**
 * Local_Module dependencies.
 */
// import { api } from '../routes';
import connectMongoDb from '../infra/db/mongo/connectMongo';
// import { errorCatcher, errorHandler } from '../utils/middlewares';

/**
 * Configs.
 */
import { NODE_ENV /*, REDIS_HOST, REDIS_PORT, REDIS_PASSWORD*/ } from '../config';

export class TsukiServer extends express {
  constructor(port) {
    super();

    this.set('port', port);
    this.config();
  }

  config = async () => {
    console.log('Configuring Express...');

    this.use(helmet());
    this.use(cors());
    this.use(compression());
    this.use(json());
    this.use(urlencoded({ extended: false }));
    this.use(cookieParser());
    this.use(morgan(NODE_ENV));

    await connectMongoDb();
  };
}
