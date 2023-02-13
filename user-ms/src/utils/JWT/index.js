import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

let JWT
try {
    JWT = Object.freeze({
        sign: (obj) => jwt.sign(obj, process.env.JWT_PK),    
        verify: (obj) => jwt.verify(obj, process.env.JWT_PK)
    })
} catch (error) {
    throw error
}

export default JWT