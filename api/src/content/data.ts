import { Response, Request } from 'express';
import { getSelectionDataFromDB, filterScholarshipsByUserInput, getScholarshipByID } from '../controllers/database/data';
import { joiApplycationInput, joiFilterParams, joiScholarshipID } from '../models/joi';
import { compareUserInputAndScholarshipData } from '../helpers/data';

const resolveSelectionData = async (req: Request, res: Response) => {
    try {
        await getSelectionDataFromDB().then((selectionData) => {
            res.status(200).json({
                selectionData
            });
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

const filterScholarships = async (req: Request, res: Response) => {
    try {
        const data = await joiFilterParams.validateAsync(req.body);

        console.log(data);

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

const getSingleScholarshipByID = async (req: Request, res: Response) => {
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

const checkForValidApplication = async (req: Request, res: Response) => {
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

export default { resolveSelectionData, filterScholarships, getSingleScholarshipByID, checkForValidApplication };
