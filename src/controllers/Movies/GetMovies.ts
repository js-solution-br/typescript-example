import { Request, Response } from 'express'

import { GetMoviesService } from '../../services/Movies/GetMoviesService';

class GetMovies {
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const movies = await new GetMoviesService().handle();

            return res.status(200).json(movies);
        } catch (error: any) {
            return res.status(500).json({
                error: {
                    message: error.message
                }
            })
        }
    }
}
export { GetMovies }