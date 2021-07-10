import filterData from '../models/filter/filterData';
const { MongoClient } = require('mongodb');

describe('insert', () => {
    let connection: any;
    let db: any;

    beforeAll(async () => {
        MongoClient.connect(
            'mongodb://root:password@localhost:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false',
            { useNewUrlParser: true },
            (err: any, client: any) => {
                const db = client.db('demo');
            }
        );
    });

    it('should read filter data', async () => {
        const users = db.collection('filterData');

        await users.findOne({}).then((res: any) => {
            expect(res).toBe(null);
        });
    });
    afterAll(async () => {
        await connection.close();
        await client.close();
    });
});
