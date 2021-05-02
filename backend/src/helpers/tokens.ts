var jwt = require('jsonwebtoken');

const SECRET = 'mySecretPassword';
const EXPIRATION_TIME_HOURS: number = 24;

const signToken = (_id: string): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        try {
            const token = jwt.sign(
                {
                    data: _id
                },
                SECRET,
                { expiresIn: `${EXPIRATION_TIME_HOURS}h` }
            );
            resolve(token);
        } catch (error) {
            reject(error);
        }
    });
};

const verifyToken = (token: string): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        try {
            resolve(jwt.verify(token, SECRET));
        } catch (error) {
            reject(error);
        }
    });
};

export default {
    verifyToken,
    signToken
};
