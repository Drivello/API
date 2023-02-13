export default function createListUsers({ usersDB }) {
    return async function listUsers(limit,offset) {
        const exists = await usersDB.findUsers(limit,offset);
        return exists;
    };
}
