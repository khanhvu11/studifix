import { Response, Request } from 'express';
import {
    getFilterDataFromDB,
    filterScholarshipsByUserInput,
    getScholarshipByID,
    getApplicationDataFromDB,
    addNewApplication,
    getApplicationByID,
    getLocalizations
} from '../controllers/database/data';
import { joiApplicationInput, joiFilterParams, joiScholarshipID } from '../models/joi';

export const resolveFilterData = async (req: Request, res: Response) => {
    try {
        await getFilterDataFromDB().then((filterData) => {
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

export const getSingleScholarshipByID = async (req: Request, res: Response) => {
    try {
        const _id: string = await joiScholarshipID.validateAsync(req.params);

        await getScholarshipByID(_id).then((scholarships) => {
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

export const checkForValidApplication = async (req: Request, res: Response) => {
    try {
        const userInput = req.body;
        const applicationData: any = await joiApplicationInput.validateAsync(userInput);

        const _id: string = await joiScholarshipID.validateAsync(req.params);

        const applicationID: string = await addNewApplication(_id, applicationData);

        const locals = await getLocalizations();
        getApplicationByID(applicationID)
            .then((data) => {
                res.status(200).json({
                    data,
                    locals
                });
            })
            .catch((e) => res.status(400).json({ e }));
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};
