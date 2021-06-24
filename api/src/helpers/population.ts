import { populationLocalizationsGenerator, populationValuesGenerator } from './dataBase';

export const populateScholarshipsValues = (): {} => {
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

export const populateScholarshipsLocals = (): {} => {
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

export const populateScholarshipDetailValues = (): {} => {
    const values = ['advancementDetail', 'advancementTime', 'state', 'institution'];

    return populationValuesGenerator(values);
};

export const populateScholarshipsDetailLocals = (): {} => {
    const localizations = ['link', 'advancementDetail', 'advancementTime', 'state', 'name', 'institution'];

    return populationLocalizationsGenerator(localizations);
};
