import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../helpers/token';

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
