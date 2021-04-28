import { Document } from 'mongoose';
import IScholarship from './scholarship';

export default interface IUser extends Document {
    lastName: string;
    firstName: string;
    dob: Date;
    email: string;
    education: IEducation;
    password: string;
    address: string;
    zipCode: number;
    city: string;
    country: string;
    phone: string;
    scholarships: IScholarship[];
}

interface IEducation {
    geography: string;
    maths: string;
    PE: string;
    english: string;
    IT: string;
    science: string;
}
