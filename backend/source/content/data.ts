import { Response, Request } from 'express';
import dbData from '../controllers/database/data';

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
        await dbData.filterScholarshipsByUserInput(req.body).then((scholarships) => {
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
