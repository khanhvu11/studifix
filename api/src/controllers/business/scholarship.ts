import { Response, Request } from 'express';
import { getFilterDataFromDB, filterScholarshipsByUserInput, getScholarshipByID, getApplicationDataFromDB, addNewApplication, getProviderByScholarshipID } from '../database/scholarship';
import { joiApplicationInput } from '../../models/joi/application';
import { joiFilterParams } from '../../models/joi/filter';
import { joiScholarshipID } from '../../models/joi/scholarshipID';
import { combineDataForApplication } from '../../helpers/application';
import { IApplicationReq } from 'interfaces/request';
import { addUser } from './user';

export const resolveFilterData = async (req: Request, res: Response) => {
    try {
        await getFilterDataFromDB().then((filterData) => {
            console.log(filterData);

            res.status(200).json({
                filterData
            });
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

export const resolveApplicationData = async (req: Request, res: Response) => {
    try {
        await getApplicationDataFromDB().then((applicationData) => {
            res.status(200).json({
                applicationData
            });
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

export const filterScholarships = async (req: Request, res: Response) => {
    try {
        const data = await joiFilterParams.validateAsync(req.body);

        await filterScholarshipsByUserInput(data).then((scholarships) => {
            res.status(200).json({
                scholarships
            });
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

export const getScholarshipDetails = async (req: Request, res: Response) => {
    try {
        const _id: string = await joiScholarshipID.validateAsync(req.params);

        await getScholarshipByID(_id).then((scholarship) => {
            res.status(200).json({
                scholarship
            });
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

export const applyWithoutAccount = async (req: Request, res: Response) => {
    try {
        // validation of application data
        const application: IApplicationReq = await joiApplicationInput.validateAsync(req.body);

        const userID = await addUser(application.applicationData);

        const providerID = await getProviderByScholarshipID(application.scholarship);

        // combines filterData, applicationData and scholarshipID to one object
        const combined = await combineDataForApplication(application.scholarship, userID, providerID, application.filterData);

        // create validized application
        await addNewApplication(combined).then(() => {
            res.sendStatus(200);
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};
