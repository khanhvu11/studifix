import { Document } from 'mongoose';

export default interface IUser extends Document {
    salutation: string;
    firstName: string;
    lastName: string;
    gender: string;
    dateOfBirth: Date;
    placeOfBirth: string;
    countryOfBirth: string;
    country: string;
    city: string;
    street: string;
    number: number;
    ZIP: number;
    mobile: string;
    email: string;
    familyStatus: string;
}

interface IEducation {
    geography: string;
    maths: string;
    PE: string;
    english: string;
    IT: string;
    science: string;
}
