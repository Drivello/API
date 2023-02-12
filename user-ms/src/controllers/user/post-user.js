export default function createPostUser({ addUser }) {
    return async function postUser(httpRequest) {
        try {
            const { ...userInfo } = httpRequest.body;

            const {_id, mail} = await addUser({
                ...userInfo,
            });
            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 201,
                body: {_id, mail},
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
            if (e.message.includes('409')) defaultResponse.statusCode = 409;

            return defaultResponse;
        }
    };
}
