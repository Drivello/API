export default function createAuthUser({ validateUser }) {
    return async function authUser(httpRequest) {
        try {
            const { ...userInfo } = httpRequest.body;

            const { _id, mail, token } = await validateUser({
                ...userInfo,
            });
            return {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + token,
                },
                statusCode: 200,
                body: { _id, mail },
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
