import {createUser} from '../../entities/index.js';
export default function createAddUser({ usersDB }) {
    return async function addUser(userInfo) {
        const user = createUser(userInfo);
        const exists = await usersDB.findByEmail(user.getMail());
        if (exists) {
            throw new Error('409 - User mail already in use');
        }

        return usersDB.insert({
            mail : user.getMail(),
            password : await user.getPassword()
        });
    };
}
