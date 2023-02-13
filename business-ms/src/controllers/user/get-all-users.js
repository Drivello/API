export default function createGetAllUsers({ listUsers }) {
    return async function getAllUsers(httpRequest) {
        try {
            const { limit, offset } = httpRequest.query;
            const users = await listUsers(limit, offset);

            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 200,
                body: { users },
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

            return defaultResponse;
        }
    };
}
