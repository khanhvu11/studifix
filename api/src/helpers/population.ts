import { populationLocalizationsGenerator, populationValuesGenerator } from './dataBase';

export const populateScholarhshipValues = (): {} => {
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

    return populationValuesGenerator(values);
};

export const populateScholarhshipLocals = (): {} => {
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

    return populationLocalizationsGenerator(localizations);
};
