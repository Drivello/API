import JWT from './JWT/index.js';
import Encrypt from './encrypt-password/index.js';

const Utils = Object.freeze({
    JWT,
    Encrypt,
});

export default Utils;

export { JWT, Encrypt };