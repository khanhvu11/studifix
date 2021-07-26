import { combineDataForApplication } from '../helpers/application';

test('Test token generation and decryption (no secret set) ', (done) => {
    const scholarship: string = '607c974e63f8eb560ea0dd90'
    const user: string = '607c974e63f8eb560ea0dd90'
    const provider: string = '607c974e63f8eb560ea0dd90'
    const filterDataInput: any = {
        commitment:  ['607c974e63f8eb560ea0dd90', '607c974e63f8eb560ea0dd83'],
        occupation: ['607c974e63f8eb560ea0dd90', '607c974e63f8eb560ea0dd83'],
        graduation: ['607c974e63f8eb560ea0dd90', '607c974e63f8eb560ea0dd83'],
        age: 23
    }
    const filterDataOutput: any = {
        commitment:  ['607c974e63f8eb560ea0dd90', '607c974e63f8eb560ea0dd83'],
        occupation: ['607c974e63f8eb560ea0dd90', '607c974e63f8eb560ea0dd83'],
        graduation: ['607c974e63f8eb560ea0dd90', '607c974e63f8eb560ea0dd83'],
    }
    const expectedOutput = {
        scholarship,
        user,
        provider,
        filterData : filterDataOutput
    }

    combineDataForApplication(scholarship, user, provider, filterDataInput)
        .then((combined) => {
            expect(combined).toStrictEqual(expectedOutput);
                    done();
                })
                .catch((error) => {
                    done(error);
                });
        })