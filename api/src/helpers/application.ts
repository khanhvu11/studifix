import { IFilterData } from 'interfaces/filterData';

/**
 *  Combines id's with current filter data.
 * @param scholarship scholarship id from scholarships user collection
 * @param userID users id from db user collection
 * @param providerID providers id from db provider collection
 * @param filterData all filter data input by user
 * @returns combined object with all three id's and filter input
 */
export const combineDataForApplication = (scholarship: string, userID: string, providerID: string, filterData: IFilterData): Promise<any> => {
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
