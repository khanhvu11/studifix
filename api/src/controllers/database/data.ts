import Scholarship from '../../models/scholarship/scholarship';
import SelectionData from '../../models/selectionData';
import { scholarshipFilterqueryGenerator, populationLocalizationsGenerator, populationValuesGenerator } from '../../helpers/dataBase';

export const getSelectionDataFromDB = (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        let filter: any = { dataSetType: 'user' };

        SelectionData.findOne(filter, {})
            .populate('occupation.values')
            .populate('graduation.values')
            .populate('course.values')
            .populate('country.values')
            .populate('city.values')
            .populate('state.values')
            .populate('nationality.values')
            .populate('religion.values')
            .populate('commitment.values')
            .populate('support.values')
            .populate('requirement.values')
            .exec()
            .then((values) => {
                console.log(values);

                resolve(values);
            })
            .catch((error) => reject(error));
    });
};

export const filterScholarshipsByUserInput = (userInput: any = {}): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        const values = [
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
            'supportSpecific',
            'referenceDetail',
            'responsible',
            'provider'
        ];

        const localizations = [
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
            'supportSpecific',
            'support',
            'provider',
            'referenceDetail',
            'nationality',
            'nationalityDetail',
            'requirement',
            'commitment',
            'imgURL',
            'advancement',
            'advancementDetail',
            'advancementTime',
        ];

        let filter = scholarshipFilterqueryGenerator(userInput.selectionData);
        let populationValues = populationValuesGenerator(values);
        let populationLocalizations = populationLocalizationsGenerator(localizations);

        Scholarship.find(filter, {})
            .populate(populationValues)
            .populate(populationLocalizations, { _id: 0, label: 0 })

            .exec()
            .then((result) => {
                resolve(result);
            })
            .catch((error) => reject(error));
    });
};

export const getScholarshipByID = (_id: string): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        const values = [
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
            'supportSpecific',
            'referenceDetail',
            'responsible',
            'provider'
        ];

        const localizations = [
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
            'supportSpecific',
            'support',
            'provider',
            'referenceDetail',
            'nationality',
            'nationalityDetail',
            'requirement',
            'commitment',
            'imgURL',
            'advancement',
            'advancementDetail',
            'advancementTime',
        ];

        let populationValues = populationValuesGenerator(values);
        let populationLocalizations = populationLocalizationsGenerator(localizations);


        console.log(_id);

        Scholarship.find({_id})
            .populate(populationValues)
            .populate(populationLocalizations, { _id: 0, label: 0 })

            .exec()
            .then((result) => {
                resolve(result);
            })
            .catch((error) => reject(error));
    });
};
