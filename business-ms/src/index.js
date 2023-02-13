import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { userController, notFound } from './controllers/index.js';
import {
    makeInternalExpressCallback,
    makePublicExpressCallback,
} from './middlewares/index.js';

dotenv.config();
const { USER_URL } = process.env;
const businessMS = express();
businessMS.use(
    cors({
        origin: USER_URL,
    })
);
businessMS.use(bodyParser.json());

const { getAllUsers } = userController;
businessMS.get('/user/list', makeInternalExpressCallback(getAllUsers));

businessMS.use(makePublicExpressCallback(notFound));

export default businessMS;
