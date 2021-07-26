import { IFilterData } from './filterData';
import IUser from './user';

export interface IApplicationReq {
    scholarship: string;
    filterData: IFilterData
    applicationData: IUser;
}
