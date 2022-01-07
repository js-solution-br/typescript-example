import { Request, Response } from 'express'

import { UpdatePersonService } from '../../services/Person/UpdatePersonService';

class UpdatePerson {
    async handle(req: Request, res: Response) {
        const { id } = req.params
        const { first_name, last_name, aliases } = req.body

        const personToUpdate: IPerson = { first_name, last_name, aliases }

        const people = await new UpdatePersonService().handle(Number.parseInt(id), personToUpdate);

        return res.json(people)
    }
}
export { UpdatePerson }