var jwt = require('jsonwebtoken');

const SECRET = 'mySecretPassword';
const EXPIRATION_TIME_HOURS: number = 24;

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
