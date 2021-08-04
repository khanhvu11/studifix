import user from '../../interfaces/user';
import UserSchema from '../../models/user/user';

/**
 * Trying to get user by id
 * @param email given mail by user
 * @returns if there is an user returns error | empty array
 */
const checkEmailAlreadyInUse = (email: string): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        UserSchema.findOne({ email })
            .exec()
            .then((results) => {
                if (results) {
                    reject(new Error('Email already in use'));
                } else {
                    resolve(results);
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
};

/**
 * Adds new user to database
 * @param userData all user relevant data
 * @returns user id | error
 */
const addUserToDB = (userData: user): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        UserSchema.create(userData)
            .then((result) => {
                resolve(result._id);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

/**
 * Read user data by mail
 * @param email user given mail
 * @returns user data | error
 */
const getUserDataByMail = (email: string): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        UserSchema.findOne({ email })
            .exec()
            .then((results) => {
                resolve(results);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

export default { checkEmailAlreadyInUse, addUserToDB, getUserDataByMail };
