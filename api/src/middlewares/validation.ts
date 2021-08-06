import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../helpers/token';

/**
 * Validation Middleware to check if user is authorized. If not ==> res 401
 * @param req request with JWT
 * @param res response object
 * @param next next function to continue when called
 */
const validateUserByToken = async (req: Request, res: Response, next: NextFunction) => {
    let token: string = req.headers.authorization!;

    await verifyToken(token)
        .then((result) => {
            res.locals.userID = result.data;
            next();
        })
        .catch((error) => {
            return res.status(401).json({
                message: error.message
            });
        });
};
export default { validateUserByToken };
