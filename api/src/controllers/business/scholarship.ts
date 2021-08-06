import { Response, Request } from 'express';
import {
    getFilterDataFromDB,
    filterScholarshipsByUserInput,
    getScholarshipByID,
    getApplicationDataFromDB,
    addNewApplication,
    getProviderByScholarshipID,
    addScholarshipToBD
} from '../database/scholarship';
import { joiApplicationInput } from '../../models/joi/application';
import { joiFilterParams } from '../../models/joi/filter';
import { combineDataForApplication } from '../../helpers/application';
import { IApplicationReq } from '../../interfaces/request';
import { addUser } from './user';
import { joiScholarship } from '../../models/joi/scholarship';
const ObjectId = require('mongoose').Types.ObjectId;

/**
 * Calls function to read filter data from database in db controller
 * @param req client request
 * @param res responds filter data
 */
export const resolveFilterData = async (req: Request, res: Response) => {
    try {
        await getFilterDataFromDB().then((filterData) => {
            console.log(filterData);

            res.status(200).json({
                filterData
            });
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

/**
 * Calls function to read application data from mongo db in db controller
 * @param req client request
 * @param res responds filter data
 */
export const resolveApplicationData = async (req: Request, res: Response) => {
    try {
        await getApplicationDataFromDB().then((applicationData) => {
            res.status(200).json({
                applicationData
            });
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

/**
 * Validate user input with joi schema and calls scholarship filter function in db controller
 * @param req client request with user choosen data for filter process
 * @param res responds array of filtered scholarships
 */
export const filterScholarships = async (req: Request, res: Response) => {
    try {
        const data = await joiFilterParams.validateAsync(req.body);

        await filterScholarshipsByUserInput(data).then((scholarships) => {
            res.status(200).json({
                scholarships
            });
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

/**
 * Checks if given id is a valid object id and calls function in db controller to get specific scholarship
 * @param req client request scholarship id
 * @param res scholarship
 */
export const getScholarshipDetails = async (req: Request, res: Response) => {
    try {
        if (!ObjectId.isValid(req.params._id)) {
            throw new Error('Not a vaild objectID');
        }
        await getScholarshipByID(req.params._id).then((scholarship) => {
            res.status(200).json({
                scholarship
            });
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

/**
 * Verifies data before calling db controller funktion to add new scholarship
 * @param req scholarship data in client request
 * @param res scholarhip id
 */
export const addNewScholarship = async (req: Request, res: Response) => {
    try {
        const scholarship: string = await joiScholarship.validateAsync(req.body);

        await addScholarshipToBD(scholarship).then((scholarship) => {
            res.status(200).json({
                scholarship
            });
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

/**
 * Application function. Checks input from client and adds user. Then calls function to get provider id. Then combines all data and calls db controller function to add a new application to db.
 * Todo: The user right now is added without an password. Please split application and registering process from each other.
 * Todo: There is already a function to register a user in the user business controller.
 * @param req object containing application and filter data as well as the scholarship id
 * @param res status 200: OK
 */
export const applyWithoutAccount = async (req: Request, res: Response) => {
    try {
        // validation of application data
        const application: IApplicationReq = await joiApplicationInput.validateAsync(req.body);

        const userID = await addUser(application.applicationData);

        const providerID = await getProviderByScholarshipID(application.scholarship);

        // combines filterData, applicationData and scholarshipID to one object
        const combined = await combineDataForApplication(application.scholarship, userID, providerID, application.filterData);

        // create validized application
        await addNewApplication(combined).then(() => {
            res.sendStatus(200);
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};
