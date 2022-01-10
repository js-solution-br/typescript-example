import { Request, Response } from 'express'

import { GetMovieDirectorsService } from '../../services/Movies/GetMovieDirectorsService';

class GetMovieDirectors {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params
        
        try {
            const directors = await new GetMovieDirectorsService().handle(Number.parseInt(id));

            return res.status(200).json(directors ?? []);
        } catch (error: any) {
            return res.status(500).json({
                error: {
                    message: error.message
                }
            })
        }
    }
}
export { GetMovieDirectors }