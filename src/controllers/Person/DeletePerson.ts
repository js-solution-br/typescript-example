import { Request, Response } from 'express'

import { DeletePersonService } from '../../services/Person/DeletePersonService';

class DeletePerson {
    async handle(req: Request, res: Response) {
        const { id } = req.params
        
        const person = new DeletePersonService().handle(Number.parseInt(id))

        return res.json({ message: "Person deleted successfully" })
    }
}
export { DeletePerson }