import JWT from './JWT/index.js';
import makeCallback from './express-callback/index.js';

const Utils = Object.freeze({
    JWT,
    makeCallback,
});

export default Utils;

export { JWT, makeCallback };