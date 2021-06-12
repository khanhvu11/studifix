import User from '../../models/user';
import user from '../../interfaces/user';

const checkEmailAlreadyInUse = (email: string): Promise<Boolean> => {
    return new Promise(async (resolve, reject) => {
        User.findOne({ email })
            .exec()
            .then((results) => {
                if (results) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
};

const addUserToDB = (userData: user): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        const user = new User(userData);

        user.save()
            .then((result) => {
                resolve(result);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

const getUserDataByMail = (email: string): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        User.findOne({ email })
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
            'supports',
        ];
        var pQuery = [{ path: 'scholarships.scholarship', populate }];

        User.findOne({ _id })
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
