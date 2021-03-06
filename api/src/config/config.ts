import dotenv from 'dotenv';

dotenv.config();

// All variables are default set in case there is no env. var.
const MONGO_PREFIX = 'mongodb';
const MONGO_USERNAME = process.env.MONGO_USERNAME || 'root';
const MONGO_PASSWORD = process.env.MONGO_USERNAME || 'password';
const MONGO_HOST = process.env.MONGO_URL || 'mongo';
const MONGO_PORT = process.env.MONGO_URL || '27017';
const DB_NAME = 'studifix';

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = 4000;

// Options for database
const MONGO_OPTIONS = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    socketTimeoutMS: 30000,
    keepAlive: true,
    poolSize: 50,
    autoIndex: false,
    retryWrites: false,
    authSource: 'admin'
};

// mongo db connection data
const MONGO = {
    host: MONGO_HOST,
    password: MONGO_PASSWORD,
    username: MONGO_USERNAME,
    options: MONGO_OPTIONS,
    url: `${MONGO_PREFIX}://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${DB_NAME}`
};

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};

const config = {
    server: SERVER,
    mongo: MONGO
};

export default config;
