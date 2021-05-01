import { Response, Request } from 'express';
import dbData from '../controllers/database/data';
import joi from '../models/joi';

const resolveSelectionData = async (req: Request, res: Response) => {
    try {
        await dbData.getSelectionDataFromDB().then((selectionData) => {
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
        const data = await joi.joiFilterParams.validateAsync(req.body);

        console.log(data);

        await dbData.filterScholarshipsByUserInput(data).then((scholarships) => {
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

export default { resolveSelectionData, filterScholarships };
