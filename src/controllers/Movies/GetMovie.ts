import { Request, Response } from 'express'

import { GetMovieService } from '../../services/Movies';

class GetMovie {
    async handle(req: Request, res: Response) {
        const { id } = req.params
        const movies = await new GetMovieService().handle(Number.parseInt(id));
        return res.json(movies?? []);
    }
}
export { GetMovie }