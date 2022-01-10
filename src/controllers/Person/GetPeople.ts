import { Request, Response } from 'express'

import { GetPeopleService } from '../../services/Person/GetPeopleService';;

class GetPeople {
    async handle(req: Request, res: Response) {
        try {
            const people: IPerson[] = await new GetPeopleService().handle()

            return res.status(200).json(people)
        } catch (error: any) {
            return res.status(500).json({
                error: {
                    message: error.message
                }
            })
        }
    }
}
export { GetPeople }