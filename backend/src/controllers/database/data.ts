import Scholarship from '../../models/scholarship/scholarship';
import SelectionData from '../../models/selectionData';
import { scholarshipFilterqueryGenerator } from '../../helpers/dataBase';

const getSelectionDataFromDB = (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        const filter: any = { dataSetType: 'user' };

        SelectionData.findOne(filter, {})
            .populate('occupation.values')
            .populate('graduation.values')
            .populate('course.values')
            .populate('country.values')
            .populate('city.values')
            .populate('state.values')
            .populate('nationality.values')
            .populate('religion.values')
            .populate('commitment.values')
            .populate('support.values')
            .populate('requirement.values')
            .exec()
            .then((values) => {
                console.log(values);

                resolve(values);
            })
            .catch((error) => reject(error));
    });
};

const filterScholarshipsByUserInput = (userInput: any = {}): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        const filter = scholarshipFilterqueryGenerator(userInput.selectionData);

        Scholarship.find(filter, {})
            .populate('institution')
            .populate('occupation')
            .populate('graduation')
            .populate('course')
            .populate('country')
            .populate('city')
            .populate('state')
            .populate('nationality')
            .populate('nationalityDetail')
            .populate('collegeGraduationState')
            .populate('religion')
            .populate('commitment')
            .populate('support')
            .populate('requirement')
            .populate('supportSpecific')
            .populate('referenceDetail')
            .populate('responsible', { position: 0 })
            .populate('provider')
            .exec()
            .then((result) => {
                resolve(result);
            })
            .catch((error) => reject(error));
    });
};

/*

        supports: [
            {_id:xyz, madatory: true}
        ]
        { $and: [{ supports: { $nin: arr } }, { 'supports.mandatory': false }] }

                        { $or: [{ occupation: { $in: arr } }, { graduations: [] }] },
                { $or: [{ religion: { $in: arr } }, { graduations: [] }] },
                { $or: [{ state: { $in: arr } }, { graduations: [] }] },
                { $or: [{ support: { $in: arr } }, { graduations: [] }] },
                { $or: [{ city: { $in: suppArr } }, { city: [] }] },
                { $or: [{ commitment: { $in: arr } }, { graduations: [] }] },
                { $or: [{ country: { $in: arr } }, { graduations: [] }] }
        */

// const fillQuery = (categories: string[], excludeQuery: any = {}, suffix: string) => {
//     return new Promise(async (resolve) => {
//         categories.map((cat) => {
//             excludeQuery[`${cat}.${suffix}`] = 1;
//         });
//         resolve(excludeQuery);
//     });
// };

// const initFillQuery = (fields: string[]) => {
//     return new Promise(async (resolve) => {
//         let excludeQuery: any = {};
//         const categories = ['graduations', 'countries', 'cities', 'states', 'commitments', 'courses', 'occupations', 'references', 'nationalities', 'requirements', 'religions'];

//         fields.map((field) => {
//             fillQuery(categories, excludeQuery, field);
//         });
//         resolve(excludeQuery);
//     });
// };

// const excludeQuery: any = await initFillQuery(fields);
// excludeQuery['_id'] = 0;

// console.log(excludeQuery);

// //Workaroud due to not able to add variable as string to JSON
// currentLangPopulate[`text_${lang}`] = 1;
// currentLangPopulate[`description_${lang}`] = 1;

// const currentLangPopulate: any = {};
// const LANG: string = `text_${lang}`;
// const fields = [LANG, 'mandatory', 'multiselect'];

// console.log(currentLangPopulate);
// console.log(excludeQuery);
// import Commitment from '../../models/scholarship/components/commitment';
// import Country from '../../models/scholarship/components/country';
// import Course from '../../models/scholarship/components/course';
// import Employee from '../../models/scholarship/components/employee';
// import Graduation from '../../models/scholarship/components/graduation';
// import Institution from '../../models/scholarship/components/institution';
// import Nationality from '../../models/scholarship/components/nationality';
// import Occupation from '../../models/scholarship/components/occupation';
// import Provider from '../../models/scholarship/components/provider';
// import ReferenceDetail from '../../models/scholarship/components/referenceDetail';
// import Religion from '../../models/scholarship/components/religion';
// import Requirements from '../../models/scholarship/components/requirements';
// import State from '../../models/scholarship/components/state';
// import Support from '../../models/scholarship/components/support';
// import SupportSpecifics from '../../models/scholarship/components/supportSpecifics';

// const getAllUserDataFromDB = (): Promise<any> => {
//     return new Promise(async (resolve, reject) => {
//         let data: any[] = [];
//         try {
//             await getAllCities(data);
//             await getAllCountries(data);
//             await getAllCourses(data);
//             await getAllCommitments(data);
//             await getAllEmployees(data);
//             await getAllGraduations(data);
//             await getAllInstitutions(data);
//             await getAllNationalities(data);
//             await getAllOccupations(data);
//             await getAllSupports(data);
//             await getAllSupportSpecifics(data);
//             await getAllRequierements(data);
//             await getAllStates(data);
//             await getAllProviders(data);
//             await getAllReligions(data);
//             await getAllReferenceDetails(data);

//             resolve(data);
//         } catch (error) {
//             reject(error);
//         }
//     });
// };

// const getAllCourses = (data: any[]): Promise<any> => {
//     return new Promise(async (resolve, reject) => {
//         Course.find({})
//             .exec()
//             .then((values) => {
//                 data.push({ title_DE: 'Fachrichtung', values });
//                 resolve(data);
//             })
//             .catch((error) => reject(error));
//     });
// };

// const getAllCommitments = (data: any[]): Promise<any> => {
//     return new Promise(async (resolve, reject) => {
//         Commitment.find({})
//             .exec()
//             .then((values) => {
//                 data.push({ title_DE: 'Engagement', values });
//                 resolve(data);
//             })
//             .catch((error) => reject(error));
//     });
// };

// const getAllCountries = (data: any[]): Promise<any> => {
//     return new Promise(async (resolve, reject) => {
//         Country.find({})
//             .exec()
//             .then((values) => {
//                 data.push({ title_DE: 'Land', values });
//                 resolve(data);
//             })
//             .catch((error) => reject(error));
//     });
// };

// const getAllCities = (data: any[]): Promise<any> => {
//     return new Promise(async (resolve, reject) => {
//         City.find({})
//             .exec()
//             .then((values) => {
//                 data.push({ title_DE: 'Stadt', values });
//                 resolve(data);
//             })
//             .catch((error) => reject(error));
//     });
// };

// const getAllEmployees = (data: any[]): Promise<any> => {
//     return new Promise(async (resolve, reject) => {
//         Employee.find({})
//             .exec()
//             .then((values) => {
//                 data.push({ title_DE: 'Mitarbeiter', values });
//                 resolve(data);
//             })
//             .catch((error) => reject(error));
//     });
// };

// const getAllGraduations = (data: any[]): Promise<any> => {
//     return new Promise(async (resolve, reject) => {
//         Graduation.find({})
//             .exec()
//             .then((values) => {
//                 data.push({ title_DE: 'Abschluss', values });
//                 resolve(data);
//             })
//             .catch((error) => reject(error));
//     });
// };

// const getAllInstitutions = (data: any[]): Promise<any> => {
//     return new Promise(async (resolve, reject) => {
//         Institution.find({})
//             .exec()
//             .then((values) => {
//                 data.push({ title_DE: 'Einrichtung', values });
//                 resolve(data);
//             })
//             .catch((error) => reject(error));
//     });
// };

// const getAllNationalities = (data: any[]): Promise<any> => {
//     return new Promise(async (resolve, reject) => {
//         Nationality.find({})
//             .exec()
//             .then((values) => {
//                 data.push({ title_DE: 'Nationalität', values });
//                 resolve(data);
//             })
//             .catch((error) => reject(error));
//     });
// };

// const getAllOccupations = (data: any[]): Promise<any> => {
//     return new Promise(async (resolve, reject) => {
//         Occupation.find({})
//             .exec()
//             .then((values) => {
//                 data.push({ title_DE: 'Derzeitige Tätigkeit', values });
//                 resolve(data);
//             })
//             .catch((error) => reject(error));
//     });
// };

// const getAllProviders = (data: any[]): Promise<any> => {
//     return new Promise(async (resolve, reject) => {
//         Provider.find({})
//             .exec()
//             .then((values) => {
//                 data.push({ title_DE: 'Stipendiengeber', values });
//                 resolve(data);
//             })
//             .catch((error) => reject(error));
//     });
// };

// const getAllReferenceDetails = (data: any[]): Promise<any> => {
//     return new Promise(async (resolve, reject) => {
//         ReferenceDetail.find({})
//             .exec()
//             .then((values) => {
//                 data.push({ title_DE: 'Referenzdetails', values });
//                 resolve(data);
//             })
//             .catch((error) => reject(error));
//     });
// };

// const getAllReligions = (data: any[]): Promise<any> => {
//     return new Promise(async (resolve, reject) => {
//         Religion.find({})
//             .exec()
//             .then((values) => {
//                 data.push({ title_DE: 'Religion', values });
//                 resolve(data);
//             })
//             .catch((error) => reject(error));
//     });
// };
// const getAllRequierements = (data: any[]): Promise<any> => {
//     return new Promise(async (resolve, reject) => {
//         Requirements.find({})
//             .exec()
//             .then((values) => {
//                 data.push({ title_DE: 'Besondere Voraussezungen', values });
//                 resolve(data);
//             })
//             .catch((error) => reject(error));
//     });
// };
// const getAllStates = (data: any[]): Promise<any> => {
//     return new Promise(async (resolve, reject) => {
//         State.find({})
//             .exec()
//             .then((values) => {
//                 data.push({ title_DE: 'Bundesland', values });
//                 resolve(data);
//             })
//             .catch((error) => reject(error));
//     });
// };
// const getAllSupports = (data: any[]): Promise<any> => {
//     return new Promise(async (resolve, reject) => {
//         Support.find({})
//             .exec()
//             .then((values) => {
//                 data.push({ title_DE: 'Unterstützung', values });
//                 resolve(data);
//             })
//             .catch((error) => reject(error));
//     });
// };
// const getAllSupportSpecifics = (data: any[]): Promise<any> => {
//     return new Promise(async (resolve, reject) => {
//         SupportSpecifics.find({})
//             .exec()
//             .then((values) => {
//                 data.push({ title_DE: 'Unterstützung spezifisch', values });
//                 resolve(data);
//             })
//             .catch((error) => reject(error));
//     });
// };

export default { getSelectionDataFromDB, filterScholarshipsByUserInput };
