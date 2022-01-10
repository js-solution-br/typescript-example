import { Request, Response } from 'express'

import { GetMoviesService } from '../../services/Movies/GetMoviesService';

class GetMovies {
    async handle(req: Request, res: Response): Promise<Response> {
        const people = await new GetMoviesService().handle();
        
        return res.json(people);
    }
}
export { GetMovies }