export const combineDataForApplication = (scholarship: any, applicationData: any, filterData: any): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        let combined: any = {};

        combined = Object.assign(applicationData, filterData);
        combined.scholarship = scholarship;

        resolve(combined);
    });
};
