import { Response, Request } from 'express';
import { getFilterDataFromDB, filterScholarshipsByUserInput, getScholarshipByID, getApplicationDataFromDB } from '../controllers/database/data';
import { joiApplycationInput, joiFilterParams, joiScholarshipID } from '../models/joi';
import { compareUserInputAndScholarshipData } from '../helpers/data';

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
        const userinput: string = await joiApplycationInput.validateAsync(req.body);
        const _id: string = await joiScholarshipID.validateAsync(req.params);

        const scholarship = await getScholarshipByID(_id);

        await compareUserInputAndScholarshipData(userinput, scholarship)
            .then((data) => res.status(200).json({ data }))
            .catch((e) => res.status(400).json({ e }));
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};
