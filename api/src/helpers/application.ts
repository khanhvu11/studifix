import { IFilterData } from 'interfaces/data';

export const combineDataForApplication = (scholarship: string, userID: string, providerID: string, filterData: any): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        interface ICombined {
            filterData: IFilterData;
            scholarship: string;
            user: string;
            provider: string;
        }

        let combined = {} as ICombined;

        combined.filterData = filterData;
        combined.scholarship = scholarship;
        combined.user = userID;
        combined.provider = providerID;

        delete combined.filterData.age;

        resolve(combined);
    });
};