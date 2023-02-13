import businessMS from './src/index.js'
import dotenv from 'dotenv';
dotenv.config();

businessMS.listen(process.env.BUSINESS_PORT, () => {
    console.log(`Business Server is listening on port ${process.env.BUSINESS_PORT}`);
});

