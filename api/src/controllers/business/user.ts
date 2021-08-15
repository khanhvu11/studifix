import { Request, Response } from 'express';
import { joiLogin } from '../../models/joi/login';
import dbUser from '../database/user';
import { hash } from '../../helpers/hash';
import { signToken } from '../../helpers/token';
import IUser from 'interfaces/user';
import { joiRegister } from '../../models/joi/register';

/**
 * Generates Token when user credentials are valid
 * @param req contains user login data
 * @param res Jason Web Token
 * @returns in case of an error returns message to client
 */
export const getToken = async (req: Request, res: Response) => {
    try {
        const data = await joiLogin.validateAsync(req.body);

        const givenPasswordHashed: string = await hash(data.password);

        const response = await dbUser.getUserDataByMail(data.email);

        if (!response || response.password !== givenPasswordHashed) {
            return res.status(401).json({
                message: 'Wrong username password combination'
            });
        }

        await signToken(response._id).then((result) =>
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

/**
 * Adds user from application process to handle application and registering in one step.
 * Right now there are two methods to handle registering.
 * Todo: combine both methods and handle registering in one method.
 * @param userData
 * @returns user id or error
 */
export const addUser = (userData: IUser): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        /** Check if email is in use */
        await dbUser
            .checkEmailAlreadyInUse(userData.email)
            .then(() => {
                dbUser
                    .addUserToDB(userData)
                    .then((userID) => {
                        resolve(userID);
                    })
                    .catch((e) => reject(e));
            })
            .catch((e) => reject(e));
    });
};

/**
 * Registers user via simple register route
 * Todo: add password to user schema. Right now we are adding a user without password.
 * @param req contains all user data
 * @param res replys JWT to user
 * @returns in case of an error returns error message
 */
export const register = async (req: Request, res: Response) => {
    try {
        const userData: IUser = await joiRegister.validateAsync(req.body);

        /*  Hash password and delete duplicate after validating password 
            data.password = hash.hash(data.password)
            delete data['repeatPassword'] */

        await dbUser.checkEmailAlreadyInUse(userData.email).then(() => {
            dbUser.addUserToDB(userData).then((userID) => {
                signToken(userID._id).then((result) =>
                    res.status(200).json({
                        jwt: result
                    })
                );
            });
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
};
