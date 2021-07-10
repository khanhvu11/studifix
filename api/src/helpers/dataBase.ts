import { IFilterData } from '../interfaces/data';
import { ObjectId as mongoObjectIdType } from 'mongoose';
const { ObjectId } = require('mongodb');

export const refactorIDs = (idList: string[]): any[] => {
    let tempArray: mongoObjectIdType[] = [];

    idList.map((_id) => {
        tempArray.push(ObjectId(_id));
    });

    return tempArray;
};

export const scholarshipFilterqueryGenerator = (idLists: IFilterData): any => {
    let tempArray = [];

    const {
        commitment,
        occupation,
        requirement,
        semester,
        graduation,
        nationality,
        support,
        course,
        state,
        religion,
        nationalityDetail,
        reference,
        supportYet,
        age,
        workExperience,
        sidejobHours,
        collageGrade,
        jobGrade,
        uniGrade
    } = idLists;

    commitment ? tempArray.push({ $or: [{ 'commitment.value': { $in: refactorIDs(commitment) } }, { 'commitment.value': null }] }) : null;
    occupation ? tempArray.push({ $or: [{ 'occupation.value': { $in: refactorIDs(occupation) } }, { 'occupation.value': null }] }) : null;
    graduation ? tempArray.push({ $or: [{ 'graduation.value': { $in: refactorIDs(graduation) } }, { 'graduation.value': null }] }) : null;
    support ? tempArray.push({ $or: [{ 'support.value': { $in: refactorIDs(support) } }, { 'support.value': null }] }) : null;
    course ? tempArray.push({ $or: [{ 'course.value': { $in: refactorIDs(course) } }, { 'course.value': null }] }) : null;
    state ? tempArray.push({ $or: [{ 'state.value': { $in: refactorIDs(state) } }, { 'state.value': null }] }) : null;
    religion ? tempArray.push({ $or: [{ 'religion.value': { $in: refactorIDs(religion) } }, { 'religion.value': null }] }) : null;
    nationality ? tempArray.push({ $or: [{ 'nationality.value': { $in: refactorIDs(nationality) } }, { 'nationality.value': null }] }) : null;
    requirement ? tempArray.push({ $or: [{ 'requirement.value': { $in: refactorIDs(requirement) } }, { 'requirement.value': null }] }) : null;
    reference ? tempArray.push({ $or: [{ 'reference.value': { $in: refactorIDs(reference) } }, { 'reference.value': null }] }) : null;
    nationalityDetail ? tempArray.push({ $or: [{ 'nationalityDetail.value': { $in: refactorIDs(nationalityDetail) } }, { 'nationalityDetail.value': null }] }) : null;

    workExperience ? tempArray.push({ $or: [{ 'workExperience.value': { $lte: workExperience } }, { 'workExperience.value': null }] }) : null;
    sidejobHours ? tempArray.push({ $or: [{ 'sidejobHours.value': { $gte: sidejobHours } }, { 'sidejobHours.value': null }] }) : null;

    collageGrade ? tempArray.push({ $or: [{ 'collageGrade.value': { $gte: collageGrade } }, { 'collageGrade.value': null }] }) : null;
    jobGrade ? tempArray.push({ $or: [{ 'jobGrade.value': { $gte: jobGrade } }, { 'jobGrade.value': null }] }) : null;
    uniGrade ? tempArray.push({ $or: [{ 'uniGrade.value': { $gte: uniGrade } }, { 'uniGrade.value': null }] }) : null;

    supportYet ? tempArray.push({ 'supportYet.value': supportYet }) : null;

    semester
        ? tempArray.push({
              $or: [
                  { $and: [{ 'semesterMin.value': { $lt: semester } }, { 'semesterMax.value': { $gt: semester } }] },
                  { $and: [{ 'semesterMin.value': null }, { 'semesterMax.value': null }] },
                  { $and: [{ 'semesterMin.value': { $lt: semester } }, { 'semesterMax.value': null }] },
                  { $and: [{ 'semesterMin.value': null }, { 'semesterMax.value': { $gt: semester } }] }
              ]
          })
        : null;

    age
        ? tempArray.push({
              $or: [
                  { $and: [{ 'ageMin.value': { $lt: age } }, { 'ageMax.value': { $gt: age } }] },
                  { $and: [{ 'ageMin.value': null }, { 'ageMax.value': null }] },
                  { $and: [{ 'ageMin.value': { $lt: age } }, { 'ageMax.value': null }] },
                  { $and: [{ 'ageMin.value': null }, { 'ageMax.value': { $gt: age } }] }
              ]
          })
        : null;

    if (tempArray.length === 0) {
        return {};
    }

    return { $and: tempArray };
};
