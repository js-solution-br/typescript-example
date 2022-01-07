import { Request, Response } from 'express'
import { GetAllRolesService } from '../../services/Roles';

class GetAllRoles {
    async handle(req: Request, res: Response) {
        const roles = await new GetAllRolesService().handle()

        return res.json(roles);
    }
}
export { GetAllRoles }