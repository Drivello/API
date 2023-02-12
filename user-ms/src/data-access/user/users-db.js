export default function createUserDB({ createDB }) {
    return Object.freeze({
        findByEmail,
        insert,
        loginUser,
    });

    async function findByEmail(mail) {
        const db = await createDB();
        const query = { mail };
        let result = await db.collection('users').find(query);
        result = await result.toArray();
        if (result.length === 0) {
            return null;
        } else {
            return result[0];
        }
    }

    async function insert(userInfo) {
        const db = await createDB();
        const result = await db.collection('users').insertOne(userInfo);
        return { _id: result.insertedId, ...userInfo };
    }

    async function loginUser(mail, getAuth) {
        const db = await createDB();
        const result = await db.collection('users').findOne({ mail });
        if (result) {
            if (await getAuth(result.password)) return result;
        }
        return null;
    }
}
