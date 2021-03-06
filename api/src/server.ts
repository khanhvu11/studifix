import http from 'http';
import express, { Request, Response, NextFunction, RequestHandler } from 'express';
import logging from './config/logging';
import config from './config/config';
import userRoutes from './routes/user';
import dataRoutes from './routes/data';
import scholarshipRoutes from './routes/scholarship';
import applicationRoutes from './routes/application';
import filterRoutes from './routes/filter';
import mongoose from 'mongoose';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';
import YAML from 'yamljs';

// get path and load swagger.yaml
const path = require('path');
const swagger_path = path.resolve(__dirname, './swagger.yaml');
const swaggerDocument = YAML.load(swagger_path);

const LOCATION = 'Server';
const router = express();

// set cors options
const options: cors.CorsOptions = {
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'X-Access-Token'],
    credentials: true,
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    origin: '*',
    preflightContinue: false
};

// apply cors options
router.use(cors(options));

// connect to mongo db via mongoose
mongoose
    .connect(config.mongo.url, config.mongo.options)
    .then(() => {
        logging.info(LOCATION, 'Connected to DB');
    })
    .catch((error) => {
        logging.error(LOCATION, error.message, error);
    });

// use router to log all incoming and outgoing requests/responses
router.use((req: Request, res: Response, next: NextFunction) => {
    logging.info(LOCATION, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`);

    res.on('finish', () => {
        logging.info(LOCATION, `METHOD - [${req.method}], URL - [${req.url}], STATUS - [${res.statusCode}]`);
    });
    next();
});

// set rules for express service
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

// all available routes
router.use('/api/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
router.use('/api/user', userRoutes);
router.use('/api/data', dataRoutes);
router.use('/api/scholarships', scholarshipRoutes);
router.use('/api/application', applicationRoutes);
router.use('/api/filter', filterRoutes);

// default response (404)
router.use((req: Request, res: Response, next: NextFunction) => {
    const error = new Error('not found');
    return res.status(404).json({ message: error.message });
});

// start express server
const httpServer = http.createServer(router);
httpServer.listen(config.server.port, () => logging.info(LOCATION, `Server running on ${config.server.hostname}:${config.server.port}`));
