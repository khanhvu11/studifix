import { populationValuesGenerator } from '../helpers/population';
import { IFilterData } from 'interfaces/data';
import { refactorIDs, scholarshipFilterqueryGenerator } from '../helpers/dataBase';

test('Generate Population Value String ', () => {
    const testArr = ['attribute1', 'atribute2'];
    expect(populationValuesGenerator(testArr)).toBe('attribute1.value atribute2.value');
});

test('Generate Scholarship Query ', async () => {
    const testObj: IFilterData = {
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
    expect(scholarshipFilterqueryGenerator(testObj)).toStrictEqual({});
});

test('Test ID refactoring - String -> ObjectID ', () => {
    const testArr = ['asd', 'asd'];
    expect(refactorIDs(testArr)).toThrowError(TypeError);
});
