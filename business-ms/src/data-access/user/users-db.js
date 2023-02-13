export default function createUserDB({ createDB }) {
    return Object.freeze({
        findUsers,
    });

    async function findUsers(limit = 0, offset = 0) {
        offset = Number(offset)
        limit = Number(limit)
        const db = await createDB();
        const [result, total] = await Promise.all([
            await db
            .collection('users')
            .find({})
            .skip(offset)
            .limit(limit),
            await db.collection('users').count()
        ])
        const users = await result.toArray();
        return {users, pagination: {
            offset,
            limit,
            total
        }}
    }
}
