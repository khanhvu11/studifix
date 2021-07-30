import { signToken, verifyToken } from '../helpers/token';

test('Test token generation and decryption (no secret set) ', (done) => {
    const _id = 'myID24';
    signToken(_id)
        .then((token) => {
            verifyToken(token)
                .then((userID) => {
                    expect(userID.data).toBe(_id);
                    done();
                })
                .catch((error) => {
                    done(error);
                });
        })
        .catch((error) => {
            done(error);
        });
});

test('Test token generation and decryption (wrong secret)', async () => {
    const _id = 'myID24';
    const encrypt = 'testingSecret5000!';
    const decrypt = 'obviouslyWrongPassword';

    const token = await signToken(_id, encrypt);
    await expect(verifyToken(token, decrypt)).rejects.toThrowError(Error);
});

test('Test token generation and decryption (proper secret)', (done) => {
    const _id = 'myID24';
    const encrypt = 'testingSecret5000!';
    const decrypt = 'testingSecret5000!';

    signToken(_id, encrypt)
        .then((token) => {
            verifyToken(token, decrypt)
                .then((userID) => {
                    expect(userID.data).toBe(_id);
                    done();
                })
                .catch((error) => {
                    done(error);
                });
        })
        .catch((error) => {
            done(error);
        });
});
