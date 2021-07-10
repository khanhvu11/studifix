import { hash } from '../helpers/hash';

test('Test Hashing function ', () => {
    const testInput = 'myTestKey123';
    const testOutput = 'd02c5995c6f9e26974affcc8da10bf498503ca8943339d3aeab49a71ca4b5772';
    expect(hash(testInput)).toBe(testOutput);
});
