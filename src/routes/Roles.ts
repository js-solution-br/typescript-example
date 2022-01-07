import { Router } from 'express';

import { GetAllRoles } from '../controllers/Roles';

const rolesRouter = Router();

rolesRouter
    .get('/roles', new GetAllRoles().handle)

export default rolesRouter