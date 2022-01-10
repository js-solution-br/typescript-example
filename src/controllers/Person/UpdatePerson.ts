import { Request, Response } from 'express'

import { UpdatePersonService } from '../../services/Person/UpdatePersonService';

class UpdatePerson {
    async handle(req: Request, res: Response) {
        const { id } = req.params
        const { first_name, last_name, aliases } = req.body

        const personToUpdate: IPerson = { first_name, last_name, aliases }

        const person = await new UpdatePersonService().handle(Number.parseInt(id), personToUpdate).catch(err => {
            return res.json({ error: err })
        });

        return res.json(person)
    }
}
export { UpdatePerson }