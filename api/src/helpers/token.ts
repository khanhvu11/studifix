var jwt = require('jsonwebtoken');

const SECRET = 'mySecretPassword';
const EXPIRATION_TIME_HOURS: number = 24;

/**
 * Creates 'signs' a new token with user id
 * @param _id user id
 * @param secret secret password for encrypting
 * @param expirationTime time until token becomes invalid
 * @returns Jason Web Token with id and expiration time
 */
export const signToken = (_id: string, secret?: string, expirationTime?: string): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        try {
            const token = jwt.sign(
                {
                    data: _id
                },
                secret ? secret : SECRET,
                { expiresIn: expirationTime ? `${expirationTime}h` : `${EXPIRATION_TIME_HOURS}h` }
            );
            resolve(token);
        } catch (error) {
            reject(error);
        }
    });
};

/**
 * Checks if token is valid.
 * @param token token sent by user
 * @param secret secret password for decrypting token
 * @returns user id | in case of error ==> throws an error.
 */
export const verifyToken = (token: string, secret?: string): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        try {
            const userID = jwt.verify(token, secret ? secret : SECRET);
            resolve(userID);
        } catch (error) {
            reject(error);
        }
    });
};
