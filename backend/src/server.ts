import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import logging from './config/logging';
import config from './config/config';
import userRoutes from './routes/user';
import dataRoutes from './routes/data';
import mongoose from 'mongoose';
import cors from 'cors';

const LOCATION = 'Server';
const router = express();

/** CONNECT TO DB */
console.log(config.mongo.url);

const options: cors.CorsOptions = {
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'X-Access-Token'],
    credentials: true,
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    origin: '*',
    preflightContinue: false
};

router.use(cors(options));

// router.options('*', cors(options));

mongoose
    .connect(config.mongo.url, config.mongo.options)
    .then(() => {
        logging.info(LOCATION, 'Connected to DB');
    })
    .catch((error) => {
        logging.error(LOCATION, error.message, error);
    });

router.use((req, res, next) => {
    logging.info(LOCATION, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`);

    res.on('finish', () => {
        logging.info(LOCATION, `METHOD - [${req.method}], URL - [${req.url}], STATUS - [${res.statusCode}]`);
    });
    next();
});
/** RULES */

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.use((req, res, next) => {
    res.header('Accsess-Control-Allow-Origin', '*');
    res.header('Accsess-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method == 'OPTIONS') {
        res.header('Accsess-Control-Allow-Methods', 'GET PATCH DELETE POST PUT');
        return res.status(200).json({});
    }
    next();
});

/** ROUTES */
router.use('/users', userRoutes);
router.use('/data', dataRoutes);

/** ERRORS */
router.use((req, res, next) => {
    const error = new Error('not found');

    return res.status(404).json({ message: error.message });
});

/** SERVER */
const httpServer = http.createServer(router);
httpServer.listen(config.server.port, () => logging.info(LOCATION, `Server running on ${config.server.hostname}:${config.server.port}`));
