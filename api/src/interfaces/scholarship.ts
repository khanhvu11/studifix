import { Document } from 'mongoose';

export default interface IScholarship extends Document {
    responsible: string;
    povider: string;
    link: string;
    occupation: string[];
    semester: number;
    graduation: string[];
    course: string[];
    country: string;
    city: string;
    state: string;
    institution: string;
    support: string[];
    supportSpecific: string[];
    referenceRequiered: boolean;
    referenceAllowed: boolean;
    referenceDetail: string[];
    ageRestriction: number;
    nationality: string;
    requirement: string[];
    religion: string;
    collegeGraduation: number;
    jobTrainingGraduation: number;
    uniGraduation: number;
    specialJobExperience: number;
    sideJobAllowed: boolean;
    currentJobHours: number;
    commitments: string[];
}
