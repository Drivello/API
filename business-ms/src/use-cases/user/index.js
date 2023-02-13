import usersDB from '../../data-access/user/index.js'
import createListUsers from "./list-users.js";

const listUsers = createListUsers({usersDB});

const userService = Object.freeze({
    listUsers,
})

export default userService

export {
    listUsers
}