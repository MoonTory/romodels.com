export const {
  APP_PORT = process.env.PORT || 5000,
  NODE_ENV = process.env.NODE_ENV || '',

  // JWT Config
  JWT_SECRET = process.env.JWT_SECRET || '',

  // Mongo Config
  DB_USER = process.env.DB_USER || '',
  DB_PASS = process.env.DB_PASS || '',
  DB_HOST = process.env.DB_HOST || '',
  DB_PORT = process.env.DB_PORT || '',
  DB_NAME = process.env.DB_NAME || '',
  MONGO_URI = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,

  // Redis Config
  REDIS_HOST = process.env.REDIS_HOST || '',
  REDIS_PORT = process.env.REDIS_PORT || '',
  REDIS_PASSWORD = process.env.REDIS_PASSWORD || '',
  REDIS_DB_NAME = process.env.REDIS_DB_NAME || '',
  REDIS_URL = `redis://:${REDIS_PASSWORD}@${REDIS_HOST}:${REDIS_PORT}`
} = process.env;
