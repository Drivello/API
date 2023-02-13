import userMS from "./user-ms/src/index.js";
import businessMS from "./business-ms/src/index.js";
import dotenv from 'dotenv';

dotenv.config();

const { USER_PORT, BUSINESS_PORT } = process.env;

userMS.listen(USER_PORT, () => {
    console.log(`User Server is listening on port ${USER_PORT}`);
});

businessMS.listen(BUSINESS_PORT, () => {
    console.log(`Business Server is listening on port ${BUSINESS_PORT}`);
});