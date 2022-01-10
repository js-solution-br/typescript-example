import { Request, Response } from 'express'

import { GetMovieService } from '../../services/Movies';

class GetMovie {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params
        
        try {
            const movie = await new GetMovieService().handle(Number.parseInt(id));

            return res.status(200).json(movie ?? []);
        } catch (error: any) {
            return res.status(500).json({
                error: {
                    message: error.message
                }
            })
        }
    }
}
export { GetMovie }