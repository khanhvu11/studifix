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

    const { commitment, occupation, requirement, semester, graduation, nationality, support, course, state, religion } = idLists;

    commitment ? tempArray.push({ $or: [{ commitment: { $in: refactorIDs(commitment) } }, { commitment: null }] }) : null;
    occupation ? tempArray.push({ $or: [{ occupation: { $in: refactorIDs(occupation) } }, { occupation: null }] }) : null;
    graduation ? tempArray.push({ $or: [{ graduation: { $in: refactorIDs(graduation) } }, { graduation: null }] }) : null;
    support ? tempArray.push({ $or: [{ support: { $in: refactorIDs(support) } }, { support: null }] }) : null;
    course ? tempArray.push({ $or: [{ course: { $in: refactorIDs(course) } }, { course: null }] }) : null;
    state ? tempArray.push({ $or: [{ state: { $in: refactorIDs(state) } }, { state: null }] }) : null;
    religion ? tempArray.push({ $or: [{ religion: { $in: refactorIDs(religion) } }, { religion: null }] }) : null;
    nationality ? tempArray.push({ $or: [{ nationality: { $in: refactorIDs(nationality) } }, { nationality: null }] }) : null;
    requirement ? tempArray.push({ $or: [{ requirement: { $in: refactorIDs(requirement) } }, { requirement: null }] }) : null;

    semester ? tempArray.push({ $or: [{ semester }, { semester: null }] }) : null;

    if (tempArray.length === 0) {
        return {};
    }
    return { $and: tempArray };
};
