export default function buildCreateUser(JWT, Encrypt){
    return function createUser({
        mail,
        password
    }){
        if(! mail ) throw new Error('User must have an email address') 
        if(! password ) throw new Error('User must have a password') 

        return Object.freeze({
            getMail: () => mail,
            getPassword: () => Encrypt.hash(password),
            getAuth: (hash) => Encrypt.compare(password, hash),
            getJwt: () => JWT.sign({mail, password})
        })
    }
}