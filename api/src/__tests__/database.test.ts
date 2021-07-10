import { populationValuesGenerator } from '../helpers/population';
import { IFilterData } from 'interfaces/data';
import { refactorIDs, scholarshipFilterqueryGenerator } from '../helpers/dataBase';
const { ObjectId } = require('mongodb');

test('Generate Population Value String ', () => {
    const testInput = ['attribute1', 'atribute2'];
    const testOutput = 'attribute1.value atribute2.value';
    expect(populationValuesGenerator(testInput)).toBe(testOutput);
});

test('Generate Scholarship Query ', async () => {
    const testInput: IFilterData = {
        commitment: null,
        occupation: null,
        graduation: null,
        course: null,
        country: null,
        semester: null,
        city: null,
        state: null,
        reference: null,
        nationality: null,
        religion: null,
        support: null,
        requirement: null,
        nationalityDetail: null,
        supportYet: null,
        age: null,
        workExperience: null,
        sidejobHours: null,
        collageGrade: null,
        jobGrade: null,
        uniGrade: null
    };
    expect(scholarshipFilterqueryGenerator(testInput)).toStrictEqual({});
});

test('Generate Scholarship Query (all values null) ', async () => {
    const testInput: IFilterData = {
        commitment: null,
        occupation: null,
        graduation: null,
        course: null,
        country: null,
        semester: null,
        city: null,
        state: null,
        reference: null,
        nationality: null,
        religion: null,
        support: null,
        requirement: null,
        nationalityDetail: null,
        supportYet: null,
        age: null,
        workExperience: null,
        sidejobHours: null,
        collageGrade: null,
        jobGrade: null,
        uniGrade: null
    };
    expect(scholarshipFilterqueryGenerator(testInput)).toStrictEqual({});
});

test('Generate Scholarship Query (no ObjectId strings) ', async () => {
    const testInput: IFilterData = {
        commitment: null,
        occupation: null,
        graduation: ['null'],
        course: null,
        country: null,
        semester: null,
        city: null,
        state: null,
        reference: ['null'],
        nationality: null,
        religion: null,
        support: null,
        requirement: ['null'],
        nationalityDetail: null,
        supportYet: null,
        age: null,
        workExperience: null,
        sidejobHours: null,
        collageGrade: null,
        jobGrade: null,
        uniGrade: null
    };
    expect(() => {
        scholarshipFilterqueryGenerator(testInput);
    }).toThrowError(Error);
});

test('Generate Scholarship Query (with values) ', async () => {
    const testInput: IFilterData = {
        commitment: null,
        occupation: null,
        graduation: ['607c974e63f8eb560ea0dd90'],
        course: null,
        country: null,
        semester: null,
        city: null,
        state: null,
        reference: ['607c49dfc59a9135d08e7c2b'],
        nationality: null,
        religion: null,
        support: null,
        requirement: ['607c49dfc59a9135d08e7c2b', '607c974e63f8eb560ea0dd90'],
        nationalityDetail: null,
        supportYet: null,
        age: null,
        workExperience: null,
        sidejobHours: null,
        collageGrade: null,
        jobGrade: null,
        uniGrade: null
    };
    const testOutput = {
        $and: [
            { $or: [{ 'graduation.value': { $in: [ObjectId('607c974e63f8eb560ea0dd90')] } }, { 'graduation.value': null }] },
            { $or: [{ 'requirement.value': { $in: [ObjectId('607c49dfc59a9135d08e7c2b'), ObjectId('607c974e63f8eb560ea0dd90')] } }, { 'requirement.value': null }] },
            { $or: [{ 'reference.value': { $in: [ObjectId('607c49dfc59a9135d08e7c2b')] } }, { 'reference.value': null }] }
        ]
    };
    expect(scholarshipFilterqueryGenerator(testInput)).toStrictEqual(testOutput);
});

test('Test ID refactoring - String[] -> ObjectID[] (Wrong ObjectIDs given) ', () => {
    const testInput = ['asd', 'asd'];
    expect(() => {
        refactorIDs(testInput);
    }).toThrowError(Error);
});

test('Test ID refactoring - String[] -> ObjectID[] (Correct Syntax) ', () => {
    const testInput = ['607c974e63f8eb560ea0dd90', '607c49dfc59a9135d08e7c2b'];
    const testOutput = [ObjectId('607c974e63f8eb560ea0dd90'), ObjectId('607c49dfc59a9135d08e7c2b')];
    expect(refactorIDs(testInput)).toStrictEqual(testOutput);
});
