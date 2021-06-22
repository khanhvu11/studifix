export const compareUserInputAndScholarshipData = (userinput: any, scholarship: any): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        console.log('userinput', userinput);

        delete scholarship['link'];
        delete scholarship.link;
        delete scholarship.imgURL;
        delete scholarship.advancement;
        delete scholarship.advancementDetail;
        delete scholarship.advancementTime;
        delete scholarship._id;
        delete scholarship.name;

        resolve(scholarship);
        console.log(scholarship);

        const k1 = {
            jo: 123
        };

        const k2 = {
            jo: 123
        };

        console.log(JSON.stringify(k1) === JSON.stringify(k2));
        // resolve(true);
    });
};
