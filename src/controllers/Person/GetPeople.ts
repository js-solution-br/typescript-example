import { Request, Response } from 'express'

import { GetPeopleService } from '../../services/Person/GetPeopleService';;

class GetPeople {
    async handle(req: Request, res: Response) {
        const people = await new GetPeopleService().handle()
        
        return res.json(people)
    }
}
export { GetPeople }