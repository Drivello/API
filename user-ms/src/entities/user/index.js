import { JWT } from '../../utils/index.js';
import buildCreateUser from './user.js';

const createUser = buildCreateUser(JWT);

export default createUser;
