import IUser from './user';

export interface IApplicationReq {
    scholarship: string;
    filterData: {};
    applicationData: IUser;
}
