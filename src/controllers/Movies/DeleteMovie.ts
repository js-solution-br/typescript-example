import { Request, Response } from 'express'

import { DeleteMovieService } from '../../services/Movies';

class DeleteMovie {
    async handle(req: Request, res: Response) {
        const { id } = req.params

        const deletedMovie = new DeleteMovieService().handle(Number.parseInt(id)).then(el=>{
            return res.json({ message: "Movie deleted successfully" })
        }).catch(er=>{
            return res.json({ message: "Error while deleting the movie" })
        })

    }
}
export { DeleteMovie }