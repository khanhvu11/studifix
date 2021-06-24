import ScholarshipSchema from '../../models/scholarship/scholarship';
import FilterDataSchema from '../../models/filter/filterData';
import ApplicationDataSchema from '../../models/application/applicationData';
import ApplicationSchema from '../../models/application/application';
import LocalizationSchema from '../../models/components/localization';

import { scholarshipFilterqueryGenerator } from '../../helpers/dataBase';
import { populateScholarshipDetailValues, populateScholarshipsDetailLocals, populateScholarshipsLocals, populateScholarshipsValues } from '../../helpers/population';

export const getFilterDataFromDB = (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        let filter: any = {};

        FilterDataSchema.findOne(filter, { city: 0, country: 0 })
            .populate('city.values')
            .populate('commitment.values')
            .populate('country.values')
            .populate('course.values')
            .populate('graduation.values')
            .populate('nationality.values')
            .populate('nationalityDetail.values')
            .populate('occupation.values')
            .populate('religion.values')
            .populate('requirement.values')
            .populate('state.values')
            .populate('support.values')
            .populate('reference.values')
            .exec()
            .then((result) => {
                resolve(result);
            })
            .catch((error) => reject(error));
    });
};

export const getApplicationDataFromDB = (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        let filter: any = {};

        ApplicationDataSchema.findOne(filter, {})
            .populate('city.values')
            .populate('country.values')
            .populate('placeOfBirth.values')
            .populate('countryOfBirth.values')
            .populate('salutation.values')
            .populate('gender.values')
            .populate('familyStatus.values')
            .exec()
            .then((result) => {
                resolve(result);
            })
            .catch((error) => reject(error));
    });
};

export const filterScholarshipsByUserInput = (userInput: any = {}): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        let filter = scholarshipFilterqueryGenerator(userInput.filterData);

        ScholarshipSchema.find(filter, {})
            .populate(populateScholarshipsValues())
            .populate(populateScholarshipsLocals(), { _id: 0, label: 0 })

            .exec()
            .then((result) => {
                resolve(result);
            })
            .catch((error) => reject(error));
    });
};

export const getScholarshipByID = (_id: string): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        ScholarshipSchema.findOne({ _id }, { _id: 0, name: 1, link: 1, state: 1, advancementDetail: 1, advancementTime: 1, institution: 1, imgURL: 1 })
            .populate(populateScholarshipDetailValues())
            .populate(populateScholarshipsDetailLocals())

            .exec()
            .then((result) => {
                resolve(result);
            })
            .catch((error) => reject(error));
    });
};

export const getLocalizations = (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        LocalizationSchema.find({}, { _id: 0 })
            .exec()
            .then((result) => {
                const tempObj: any = {};
                result.map((local: any) => {
                    tempObj[local.label] = local;
                });
                resolve(tempObj);
            })
            .catch((error) => reject(error));
    });
};

export const addNewApplication = (application: any): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        ApplicationSchema.create(application)
            .then((result) => {
                resolve(result);
            })
            .catch((error) => reject(error));
    });
};

export const getProviderByScholarshipID = (scholarshipID: any): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        ScholarshipSchema.findOne({ _id: scholarshipID }, { provider: 1, _id: 0 })
            .then((result: any) => {
                resolve(result.provider.value);
            })
            .catch((error) => reject(error));
    });
};

export const getApplicationByID = (_id: string): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        ApplicationSchema.findOne({ _id }, { updatedAt: 0, __v: 0, _id: 0 })
            .populate({
                path: 'scholarship',
                populate: {
                    path: populateScholarshipsValues()
                }
            })
            .populate('city')
            .populate('country')
            .populate('placeOfBirth')
            .populate('countryOfBirth')
            .populate('salutation')
            .populate('gender')
            .populate('familyStatus')
            .exec()
            .then((result) => {
                resolve(result);
            })
            .catch((error) => reject(error));
    });
};
