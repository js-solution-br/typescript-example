import { Request, Response } from 'express'

import { GetMovieCastingService } from '../../services/Movies/GetMovieCastingService';

class GetMovieCasting {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params
        
        try {
            const casting = await new GetMovieCastingService().handle(Number.parseInt(id));

            return res.status(200).json(casting ?? []);
        } catch (error: any) {
            return res.status(500).json({
                error: {
                    message: error.message
                }
            })
        }
    }
}
export { GetMovieCasting }