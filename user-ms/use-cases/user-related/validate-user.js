import createUser from '../../entities/user/index.js';
export default function createValidateUser({ usersDB }) {
    return async function validateUser(userInfo) {
        const user = createUser(userInfo);
        const exists = await usersDB.loginUser(user.getMail(), user.getPassword());
        if (exists) {
            let token = user.getJwt()
            return {...exists, token};
        }else {
            throw new Error('401 Unauthorized - Invalid Credentials');
        }
    };
}
