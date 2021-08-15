/**
 * Merges incoming words with special ending '.value' to be used as an populator for mongo db
 * @param attributes attribute names
 * @returns array of new attribute names
 */
export const populationValuesGenerator = (attributes: string[]): string => {
    let tempArr: string[] = [];

    attributes.map((attr) => {
        tempArr.push(attr + '.value');
    });

    return tempArr.join(' ');
};

/**
 * Merges incoming words with special ending '.localization' to be used as an populator for mongo db
 * @param attributes attribute names
 * @returns array of new attribute names
 */
export const populationLocalizationsGenerator = (attributes: string[]): string => {
    let tempArr: string[] = [];

    attributes.map((attr) => {
        tempArr.push(attr + '.localization');
    });

    return tempArr.join(' ');
};

/**
 * Gives population values to populate specific paths in db
 * @returns population values
 */
export const populateScholarshipDetailValues = (): {} => {
    const values = ['advancementDetail', 'advancementTime', 'state', 'institution'];

    return populationValuesGenerator(values);
};

/**
 * Gives population values to populate specific paths in db
 * @returns population values
 */
export const populateScholarshipsDetailLocals = (): {} => {
    const localizations = ['link', 'advancementDetail', 'advancementTime', 'state', 'name', 'institution'];

    return populationLocalizationsGenerator(localizations);
};
