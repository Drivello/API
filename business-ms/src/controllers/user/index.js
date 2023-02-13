import { userService } from '../../use-cases/index.js';
import createGetAllUsers from './get-all-users.js';

const { listUsers } = userService;
const getAllUsers = createGetAllUsers({ listUsers });

const userController = Object.freeze({
    getAllUsers,
});

export default userController;

export { 
    getAllUsers 
};
