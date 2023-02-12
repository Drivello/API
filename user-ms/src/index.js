import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { userController, notFound } from './controllers/index.js';
import { makeCallback } from './utils/index.js';

dotenv.config();
const { BUSINESS_URL } = process.env;
const userMS = express();
userMS.use(
    cors({
        origin: BUSINESS_URL,
    })
);
userMS.use(bodyParser.json());

const { authUser, postUser } = userController;
userMS.get('/user/auth', makeCallback(authUser));
userMS.post('/user/add', makeCallback(postUser));

userMS.use(makeCallback(notFound));

// listen for requests
// userMS.listen(AUTH_PORT, () => {
//     console.log(`Server is listening on port ${AUTH_PORT}`);
// });

export default userMS;
