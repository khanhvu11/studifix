import Scholarship from '../../models/scholarship/scholarship';
import SelectionData from '../../models/selectionData';
import { scholarshipFilterqueryGenerator, populationLocalizationsGenerator, populationValuesGenerator } from '../../helpers/dataBase';

export const getSelectionDataFromDB = (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        let filter: any = { dataSetType: 'user' };

        SelectionData.findOne(filter, { dataSetType: 0 })
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
            'advancementTime'
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
            'advancementTime'
        ];

        let populationValues = populationValuesGenerator(values);
        let populationLocalizations = populationLocalizationsGenerator(localizations);

        Scholarship.findOne({ _id })
            .populate(populationValues)
            .populate(populationLocalizations, { _id: 0, label: 0 })

            .exec()
            .then((result) => {
                resolve(result);
            })
            .catch((error) => reject(error));
    });
};
