import { userService } from '../../use-cases/index.js';
import createPostUser from './post-user.js';
import createAuthUser from './auth-user.js';
import createGetUsers from './get-users.js';

const { addUser, validateUser } = userService;
const getUsers = createGetUsers();
const postUser = createPostUser({ addUser });
const authUser = createAuthUser({ validateUser });

const userController = Object.freeze({
    postUser,
    authUser,
    getUsers,
});

export default userController;
export { postUser, authUser, getUsers };
