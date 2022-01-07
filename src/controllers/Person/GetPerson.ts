import { Request, Response } from 'express'
import { GetMoviesAsActorOrActressService, GetMoviesAsDirectorService, GetMoviesAsProducerService } from '../../services/Person'
import { GetPersonService } from '../../services/Person/GetPersonService'

class GetPerson {
    async handle(req: Request, res: Response): Promise<any> {
        const { id } = req.params
        console.log(id)
        const person: any = await new GetPersonService().handle(Number.parseInt(id))
        if (!person) {
            return res.json([])
        }

        person.movies_as_actor_or_actress = await new GetMoviesAsActorOrActressService().handle(Number.parseInt(id))
        person.movies_as_director = await new GetMoviesAsDirectorService().handle(Number.parseInt(id));
        person.movies_as_producer = await new GetMoviesAsProducerService().handle(Number.parseInt(id));

        return res.json(person)
    }
}
export { GetPerson }