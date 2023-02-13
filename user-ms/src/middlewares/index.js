import makePublicExpressCallback from './public-callback.js';
import makePrivateExpressCallback from './private-callback.js';

const Middlewares = Object.freeze({
    makePublicExpressCallback,
    makePrivateExpressCallback,
});

export default Middlewares;

export {
    makePublicExpressCallback,
    makePrivateExpressCallback,

}