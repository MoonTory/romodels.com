
/**
 * Node_Module dependencies.
 */
import express, { urlencoded, json } from 'express';
import Redis from 'ioredis';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

/**
 * Local_Module dependencies.
 */
import { api } from '../routes';
import { connectMongoDb } from '../db/mongo';
import { errorCatcher, errorHandler } from '../utils/middlewares';

/**
 * Configs.
 */
import { NODE_ENV, REDIS_HOST, REDIS_PORT, REDIS_PASSWORD } from '../config';

/**
 * Initializing Express App.
 */
const app = express();

/**
 * Express Middleware Stack.
 */
app.use(helmet());
app.use(cors());
app.use(morgan(NODE_ENV));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

/**
 * Connect to MongoDb.
 */
connectMongoDb();

/**
 * Ioredis Client.
 */
const redis = new Redis({
  host: REDIS_HOST,
  port: REDIS_PORT,
  password: REDIS_PASSWORD,
});

app.use('/api', new api(redis));

/**
 * Express Error handling.
 */
app.use(errorCatcher);
app.use(errorHandler);

export default app;