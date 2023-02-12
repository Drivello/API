import { userService } from '../../use-cases/index.js';
import createPostUser from './post-user.js';
import createAuthUser from './auth-user.js';

const { addUser, validateUser } = userService;
const postUser = createPostUser({ addUser });
const authUser = createAuthUser({ validateUser });

const userController = Object.freeze({
    postUser,
    authUser,
});

export default userController;
export { postUser, authUser };
