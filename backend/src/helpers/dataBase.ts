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

    commitment ? tempArray.push({ $or: [{ 'commitment.value': { $in: refactorIDs(commitment) } }, { 'commitment.value': null }] }) : null;
    occupation ? tempArray.push({ $or: [{ 'occupation.value': { $in: refactorIDs(occupation) } }, { 'occupation.value': null }] }) : null;
    graduation ? tempArray.push({ $or: [{ 'graduation.value': { $in: refactorIDs(graduation) } }, { 'graduation.value': null }] }) : null;
    support ? tempArray.push({ $or: [{ 'support.value': { $in: refactorIDs(support) } }, { 'support.value': null }] }) : null;
    course ? tempArray.push({ $or: [{ 'course.value': { $in: refactorIDs(course) } }, { 'course.value': null }] }) : null;
    state ? tempArray.push({ $or: [{ 'state.value': { $in: refactorIDs(state) } }, { 'state.value': null }] }) : null;
    religion ? tempArray.push({ $or: [{ 'religion.value': { $in: refactorIDs(religion) } }, { 'religion.value': null }] }) : null;
    nationality ? tempArray.push({ $or: [{ 'nationality.value': { $in: refactorIDs(nationality) } }, { 'nationality.value': null }] }) : null;
    requirement ? tempArray.push({ $or: [{ 'requirement.value': { $in: refactorIDs(requirement) } }, { 'requirement.value': null }] }) : null;

    semester ? tempArray.push({ $or: [{ 'semester.value': semester }, { 'semester.value': null }] }) : null;

    if (tempArray.length === 0) {
        return {};
    }

    console.log('jo', tempArray);

    return { $and: tempArray };
};

export const populationValuesGenerator = (attributes: string[]): string => {
    let tempArr: string[] = [];

    attributes.map((attr) => {
        tempArr.push(attr + '.value');
    });

    return tempArr.join(' ');
};

export const populationLocalizationsGenerator = (attributes: string[]): string => {
    let tempArr: string[] = [];

    attributes.map((attr) => {
        tempArr.push(attr + '.localization');
    });

    return tempArr.join(' ');
};
