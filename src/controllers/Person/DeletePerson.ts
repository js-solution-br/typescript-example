import { Request, Response } from 'express'

import { DeletePersonService } from '../../services/Person/DeletePersonService';

class DeletePerson {
    async handle(req: Request, res: Response) {
        const { id } = req.params

        try {
            await new DeletePersonService().handle(Number.parseInt(id))

            return res.status(500).json({ message: "Person deleted successfully" })
        } catch (error: any) {
            return res.status(200).json({
                error: {
                    message: error.message
                }
            })
        }
    }
}
export { DeletePerson }