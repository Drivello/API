import makeInternalExpressCallback from './internal-callback.js';
import makePublicExpressCallback from './public-callback.js';

const Middlewares = Object.freeze({
    makeInternalExpressCallback,
    makePublicExpressCallback,
});

export default Middlewares;

export { makeInternalExpressCallback, makePublicExpressCallback };
