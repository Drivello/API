export default function buildCreateUser(JWT, Encrypter){
    return function createUser({
        mail,
        password // = Encrypter(password)
    }){
        if(! mail ) throw new Error('User must have an email address') 
        if(! password ) throw new Error('User must have a password') 

        return Object.freeze({
            getMail: () => mail,
            getPassword: () => password,
            getJwt: () => JWT.sign({mail, password})
        })
    }
}