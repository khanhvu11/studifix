import { Document } from 'mongoose';

export default interface IScholarship extends Document {
    responsible: string;
    povider: string;
    link: string;
    occupations: string[];
    semester: number;
    graduations: string[];
    courses: string[];
    country: string;
    city: string;
    state: string;
    institution: string;
    supports: string[];
    supportSpecifics: string[];
    referenceRequiered: boolean;
    referenceAllowed: boolean;
    referenceDetail: string[];
    ageRestriction: number;
    nationalitys: string;
    requirements: string[];
    religions: string;
    collegeGraduation: number;
    jobTrainingGraduation: number;
    uniGraduation: number;
    specialJobExperiences: number;
    sideJobAllowed: boolean;
    currentJobHours: number;
    commitments: string[];
}
