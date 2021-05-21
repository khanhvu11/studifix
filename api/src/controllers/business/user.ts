import { Request, Response } from 'express';
import {joiLogin, joiRegister} from '../../models/joi';
import dbUser from '../database/user';
import hash from '../../helpers/hash';
import tokens from '../../helpers/tokens';

const getToken = async (req: Request, res: Response) => {
    try {
        const data = await joiLogin.validateAsync(req.body);

        const givenPasswordHashed: string = await hash.hash(data.password);

        const response = await dbUser.getUserDataByMail(data.email);

        if (!response || response.password !== givenPasswordHashed) {
            return res.status(400).json({
                message: 'Wrong username password combination'
            });
        }

        await tokens.signToken(response._id).then((result) =>
            res.status(200).json({
                message: 'Successfully logged in.',
                jwt: result
            })
        );
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

const addUser = async (req: Request, res: Response) => {
    try {
        /** Validate User Input and create User Object*/
        //TODO: remove value from password error
        const data = await joiRegister.validateAsync(req.body);

        /** Hash password and delete duplicate after validating password */
        data.password = hash.hash(data.password);
        delete data['repeatPassword'];

        /** Check if email is in use */
        const mailInUse = await dbUser.checkEmailAlreadyInUse(data.email);
        if (mailInUse) {
            return res.status(409).json({
                message: 'Email already in Use'
            });
        }
        /** Add User to DB */
        const result = await dbUser.addUserToDB(data);

        /** If fullfilled generate JWT with userID. Encrypt with hashed user password */
        await tokens.signToken(result._id).then((result) =>
            res.status(200).json({
                message: 'User successfully added to DB.',
                jwt: result
            })
        );
    } catch (error) {
        /** Catch all errors for default */
        return res.status(500).json({
            message: error.message
        });
    }
};

export default { getToken, addUser };
