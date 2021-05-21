import { Response, Request } from 'express';
import {getSelectionDataFromDB, filterScholarshipsByUserInput, getScholarshipByID} from '../controllers/database/data';
import {joiFilterParams, joiScholarshipID} from '../models/joi';

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

export default { resolveSelectionData, filterScholarships, getSingleScholarshipByID };
