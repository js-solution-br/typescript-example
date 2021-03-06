import { Request, Response } from 'express'
import { CreatePersonService } from '../../services/Person/CreatePersonService';

class CreatePerson {
    async handle(req: Request, res: Response): Promise<Response> {
        const { first_name, last_name, aliases } = req.body

        const personToCreate: IPerson = { first_name, last_name, aliases }
        try {
            const create = await new CreatePersonService().handle(personToCreate)

            return res.status(200).json(create);
        } catch (error: any) {
            return res.status(500).json({
                error: {
                    message: error.message
                }
            })
        }
    }
}
export { CreatePerson }