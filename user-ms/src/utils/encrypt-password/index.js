import bcrypt from 'bcrypt'

const Encrypt = Object.freeze({
    hash: (password) => bcrypt.hash(password, 10),
    compare: (password, hashedPassword) => bcrypt.compare(password, hashedPassword)
})

export default Encrypt