import userMS from './src/index.js'
import dotenv from 'dotenv';
dotenv.config();

userMS.listen(process.env.USER_PORT, () => {
    console.log(`User Server is listening on port ${process.env.USER_PORT}`);
});

