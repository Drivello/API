import userMS from "./user-ms/src/index.js";
import dotenv from 'dotenv';

dotenv.config();

const { AUTH_PORT } = process.env;

userMS.listen(AUTH_PORT, () => {
    console.log(`User Server is listening on port ${AUTH_PORT}`);
});
