import { IUserInputList } from '../interfaces/data';
const { ObjectId } = require('mongodb');

const refactorIDs = (idList: string[]): any[] => {
    let tempArray: any = [];
    idList.map((_id) => {
        console.log(_id);
        tempArray.push(ObjectId(String(_id)));
    });

    return tempArray;
};

export const scholarshipFilterqueryGenerator = (idLists: IUserInputList): any => {
    let tempArray = [];

    const { commitment, occupation, semester } = idLists;

    commitment.length > 0 ? tempArray.push({ $or: [{ commitments: { $in: refactorIDs(commitment) } }, { commitments: [] }] }) : null;
    occupation.length > 0 ? tempArray.push({ $or: [{ commitments: { $in: refactorIDs(occupation) } }, { occupation: [] }] }) : null;
    semester ? tempArray.push({ $or: [{ semester: semester }, { semester: null }] }) : null;

    if (tempArray.length === 0) {
        return {};
    }
    return { $and: tempArray };
};
