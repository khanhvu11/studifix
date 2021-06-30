import user from '../../interfaces/user';
import UserSchema from '../../models/user/user';

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

const getUserDataByID = (_id: string): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        const populate = [
            'occupations',
            'responsible',
            'graduations',
            'religions',
            'commitments',
            'provider',
            'country',
            'city',
            'state',
            'institution',
            'nationalities',
            'referenceDetails',
            'courses',
            'requirements',
            'supports'
        ];
        var pQuery = [{ path: 'scholarships.scholarship', populate }];

        UserSchema.findOne({ _id })
            .populate(pQuery)
            .exec()
            .then((results) => {
                // console.log(results?.scholarships);
                resolve(results);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

export default { checkEmailAlreadyInUse, addUserToDB, getUserDataByMail, getUserDataByID };
