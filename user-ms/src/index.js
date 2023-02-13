import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { userController, notFound } from './controllers/index.js';
import { makePublicExpressCallback, makePrivateExpressCallback } from './middlewares/index.js';

dotenv.config();
const { BUSINESS_URL } = process.env;
const userMS = express();
userMS.use(
    cors({
        origin: BUSINESS_URL,
    })
);
userMS.use(bodyParser.json());

const { authUser, postUser, getUsers } = userController;
userMS.get('/user/auth', makePublicExpressCallback(authUser));
userMS.post('/user/add', makePublicExpressCallback(postUser));
userMS.get('/user/list', makePrivateExpressCallback(getUsers));

userMS.use(makePublicExpressCallback(notFound));

export default userMS;
