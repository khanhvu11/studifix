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

    //todo: run through joi
    const { commitment, occupation, semester, graduation, support, country, course, state, city, religion } = idLists;

    console.log(commitment, occupation, semester, graduation, support, country, course, state, city, religion);

    commitment ? tempArray.push({ $or: [{ commitment: { $in: refactorIDs(commitment) } }, { commitment: [] }] }) : null;
    occupation ? tempArray.push({ $or: [{ occupation: { $in: refactorIDs(occupation) } }, { occupation: [] }] }) : null;
    graduation ? tempArray.push({ $or: [{ graduation: { $in: refactorIDs(graduation) } }, { graduation: [] }] }) : null;
    support ? tempArray.push({ $or: [{ support: { $in: refactorIDs(support) } }, { support: [] }] }) : null;
    course ? tempArray.push({ $or: [{ course: { $in: refactorIDs(course) } }, { course: [] }] }) : null;

    country ? tempArray.push({ $or: [{ country }, { country: null }] }) : null;
    state ? tempArray.push({ $or: [{ state }, { state: null }] }) : null;
    city ? tempArray.push({ $or: [{ city }, { city: null }] }) : null;
    semester ? tempArray.push({ $or: [{ semester }, { semester: null }] }) : null;
    religion ? tempArray.push({ $or: [{ religion }, { religion: null }] }) : null;

    if (tempArray.length === 0) {
        return {};
    }
    return { $and: tempArray };
};
