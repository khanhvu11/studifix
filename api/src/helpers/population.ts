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

export const populateScholarshipDetailValues = (): {} => {
    const values = ['advancementDetail', 'advancementTime', 'state', 'institution'];

    return populationValuesGenerator(values);
};

export const populateScholarshipsDetailLocals = (): {} => {
    const localizations = ['link', 'advancementDetail', 'advancementTime', 'state', 'name', 'institution'];

    return populationLocalizationsGenerator(localizations);
};
