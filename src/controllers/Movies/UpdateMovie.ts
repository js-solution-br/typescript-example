import { NextFunction, Request, Response } from 'express'
import { UpdateMovieService } from '../../services/Movies';


class UpdateMovie {
    async handle(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params
        const { title, release_year, casting, directors, producers } = req.body

        const movieToCreate: IMovie = { title, release_year }

        const { id: movieId,
            title: movieTitle,
            release_year: movie_releaseYear
        } = await new UpdateMovieService().handle(Number.parseInt(id), movieToCreate)

        return res.json([{ message: "Movie updated successfully" }, {
            id: movieId,
            title: movieTitle,
            release_year: movie_releaseYear
        }])
    }
}
export { UpdateMovie }