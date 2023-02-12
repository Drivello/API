import { JWT, Encrypt } from '../../utils/index.js';
import buildCreateUser from './user.js';

const createUser = buildCreateUser(JWT, Encrypt);

export default createUser;
