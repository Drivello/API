import axios from 'axios';
import JWT from '../../utils/JWT/index.js';
export default function createGetUsers() {
    return async function getUsers(httpRequest) {
        try {
            const { limit = 0, offset = 0 } = httpRequest.query;
            let toSend = {
                MS: 'USER_MS',
                isAuthorized: true,
            };
            const token = JWT.sign(toSend);

            const {data} = await axios.get(
                `${process.env.BUSINESS_URL}/user/list?limit=${limit}&offset=${offset}`,
                {
                    headers: {
                        Authorization: 'Bearer ' + token,
                    },
                }
            );

            const response = data.users;

            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 200,
                body: { ...response },
            };
        } catch (e) {
            let defaultResponse = {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 400,
                body: {
                    error: e.message,
                },
            };
            console.log(e);
            if (e.message.includes('401')) defaultResponse.statusCode = 401;

            return defaultResponse;
        }
    };
}
