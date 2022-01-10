import { Request, Response } from 'express'

import { GetMovieProducersService } from '../../services/Movies/GetMovieProducersService';

class GetMovieProducers {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params
        
        try {
            const directors = await new GetMovieProducersService().handle(Number.parseInt(id));

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
export { GetMovieProducers }