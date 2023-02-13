import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const JWT = Object.freeze({
    sign: (obj) => jwt.sign(obj, process.env.JWT_PK),    
    verify: (obj) => jwt.verify(obj, process.env.JWT_PK)
})
export default JWT