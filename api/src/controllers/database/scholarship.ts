import ScholarshipSchema from '../../models/scholarship/scholarship';
import FilterDataSchema from '../../models/filter/filterData';
import ApplicationDataSchema from '../../models/application/applicationData';
import ApplicationSchema from '../../models/application/application';
import LocalizationSchema from '../../models/components/localization';

import { scholarshipFilterqueryGenerator } from '../../helpers/dataBase';
import { populationLocalizationsGenerator, populationValuesGenerator } from '../../helpers/population';

// fixed values to set population paths for object values
const populationValues = [
    'advancement',
    'institution',
    'occupation',
    'graduation',
    'course',
    'country',
    'city',
    'state',
    'collegeGraduationState',
    'nationality',
    'nationalityDetail',
    'religion',
    'commitment',
    'support',
    'requirement',
    'referenceDetail',
    'responsible',
    'provider'
];

// fixed values to set population paths for localizations
const populationLocalizations = [
    'link',
    'semester',
    'referenceRequiered',
    'referenceAllowed',
    'age',
    'collegeGraduation',
    'collegeGraduationState',
    'jobTrainingGraduation',
    'uniGraduation',
    'sideJobAllowed',
    'currentJobHours',
    'specialJobExperience',
    'course',
    'country',
    'city',
    'state',
    'institution',
    'graduation',
    'occupation',
    'religion',
    'support',
    'provider',
    'referenceDetail',
    'nationality',
    'nationalityDetail',
    'requirement',
    'responsible',
    'commitment',
    'imgURL',
    'advancement',
    'advancementDetail',
    'advancementTime'
];

/**
 * Reads filter data from mongo db and populates the given values
 * @returns filter data | error
 */
export const getFilterDataFromDB = (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        console.log('request');

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

/**
 * Reads filter data from mongo db and populates the given values
 * @returns application data | error
 */
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

/**
 * Reads all scholarships according to the users filter preferences from mongo db and populates it by given population values
 * @param userInput object with user preferences
 * @returns array of matching scholarships | error
 */
export const filterScholarshipsByUserInput = (userInput: any = {}): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        let filter = scholarshipFilterqueryGenerator(userInput.filterData);

        ScholarshipSchema.find(filter, {})
            .populate(populationValuesGenerator(populationValues))
            .populate(populationLocalizationsGenerator(populationLocalizations), { _id: 0, label: 0 })

            .exec()
            .then((result) => {
                resolve(result);
            })
            .catch((error) => reject(error));
    });
};

/**
 * Reads only one scholarship by given id
 * @param _id scholarship id
 * @returns one matching scholarship
 */
export const getScholarshipByID = (_id: string): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        ScholarshipSchema.findOne({ _id }, { _id: 0, name: 1, link: 1, state: 1, advancementDetail: 1, advancementTime: 1, institution: 1, imgURL: 1 })
            .populate(populationValuesGenerator(populationValues))
            .populate(populationLocalizationsGenerator(populationLocalizations))

            .exec()
            .then((result) => {
                resolve(result);
            })
            .catch((error) => reject(error));
    });
};

/**
 * Adds a new entry to scholarship collection
 * @param scholarshipData user given scholarship data
 * @returns scholarship id
 */
export const addScholarshipToBD = (scholarshipData: {}): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        ScholarshipSchema.create(scholarshipData)
            .then((result) => {
                resolve(result);
            })
            .catch((error) => reject(error));
    });
};

/**
 * Gets array of all localizations and converts it into an object.
 * @returns object of localizations
 */
export const getLocalizations = (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        LocalizationSchema.find({}, { _id: 0 })
            .exec()
            .then((result) => {
                const tempObj: any = {};
                // get label of every element in array and fills all content by this name into an object
                result.map((local: any) => {
                    tempObj[local.label] = local;
                });
                resolve(tempObj);
            })
            .catch((error) => reject(error));
    });
};

/**
 * Add a new application to mongo db
 * @param application application data given by user and collected from database
 * @returns application id
 */
export const addNewApplication = (application: any): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        ApplicationSchema.create(application)
            .then((result) => {
                resolve(result);
            })
            .catch((error) => reject(error));
    });
};

/**
 * Reads provider id from scholarships collection by scholarship id
 * @param scholarshipID given id by user
 * @returns provider id
 */
export const getProviderByScholarshipID = (scholarshipID: any): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        ScholarshipSchema.findOne({ _id: scholarshipID }, { provider: 1, _id: 0 })
            .then((result: any) => {
                resolve(result.provider.value);
            })
            .catch((error) => reject(error));
    });
};

/**
 * Reads application by id and populates given values and removes version, updated timestamp and id
 * @param _id given application id
 * @returns One application
 */
export const getApplicationByID = (_id: string): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        ApplicationSchema.findOne({ _id }, { updatedAt: 0, __v: 0, _id: 0 })
            .populate({
                path: 'scholarship',
                populate: {
                    path: populationValuesGenerator(populationValues)
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
