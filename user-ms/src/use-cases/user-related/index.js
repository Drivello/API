import usersDB from '../../data-access/user/index.js'
import createAddUser from './add-user.js'
import createValidateUser from './validate-user.js'

const addUser = createAddUser({ usersDB })
const validateUser = createValidateUser({ usersDB })

const userService = Object.freeze({
    addUser,
    validateUser
})

export default userService
export { addUser, validateUser }
