import http from 'http';
import express, { Request, Response, NextFunction, RequestHandler } from 'express';
import logging from './config/logging';
import config from './config/config';
import userRoutes from './routes/user';
import dataRoutes from './routes/data';
import scholarshipRoutes from './routes/scholarship';
import applicationRoutes from './routes/application';
import mongoose from 'mongoose';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';
import { specs } from './config/swagger';

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

mongoose
    .connect(config.mongo.url, config.mongo.options)
    .then(() => {
        logging.info(LOCATION, 'Connected to DB');
    })
    .catch((error) => {
        logging.error(LOCATION, error.message, error);
    });

router.use((req: Request, res: Response, next: NextFunction) => {
    logging.info(LOCATION, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`);

    res.on('finish', () => {
        logging.info(LOCATION, `METHOD - [${req.method}], URL - [${req.url}], STATUS - [${res.statusCode}]`);
    });
    next();
});

/** RULES */
router.use(express.json({ limit: '20mb' }) as RequestHandler);
router.use(express.urlencoded({ extended: true, limit: '20mb' }) as RequestHandler);

router.use((req: Request, res: Response, next: NextFunction) => {
    res.header('Accsess-Control-Allow-Origin', '*');
    res.header('Accsess-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method == 'OPTIONS') {
        res.header('Accsess-Control-Allow-Methods', 'GET PATCH DELETE POST PUT');
        return res.status(200).json({});
    }
    next();
});

/** ROUTES */
router.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));
router.use('/api/user', userRoutes);
router.use('/api/data', dataRoutes);
router.use('/api/scholarship', scholarshipRoutes);
router.use('/api/application', applicationRoutes);

/** ERRORS */
router.use((req: Request, res: Response, next: NextFunction) => {
    const error = new Error('not found');

    return res.status(404).json({ message: error.message });
});

/** SERVER */
const httpServer = http.createServer(router);
httpServer.listen(config.server.port, () => logging.info(LOCATION, `Server running on ${config.server.hostname}:${config.server.port}`));
function extended(
    extended: any,
    arg1: boolean
): import('express-serve-static-core').RequestHandler<import('express-serve-static-core').ParamsDictionary, any, any, import('qs').ParsedQs, Record<string, any>> {
    throw new Error('Function not implemented.');
}
