import { Request, Response } from 'express'

import { DeleteMovieService } from '../../services/Movies';

class DeleteMovie {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params
        try {
            await new DeleteMovieService().handle(Number.parseInt(id))

        } catch (error: any) {
            return res.json({
                error: {
                    message: error.message
                }
            })
        }
        return res.json({ message: "Movie deleted successfully" })
    }
}
export { DeleteMovie }