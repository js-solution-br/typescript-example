import { Request, Response } from 'express'
import { CreatePersonService } from '../../services/Person/CreatePersonService';

class CreatePerson {
    async handle(req: Request, res: Response) {
        const { first_name, last_name, aliases } = req.body

        const personToCreate: IPerson = { first_name, last_name, aliases }

        const create = await new CreatePersonService().handle(personToCreate)

        return res.json(create);
    }
}
export { CreatePerson }