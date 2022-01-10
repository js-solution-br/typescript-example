import { NextFunction, Request, Response } from 'express'
import { RolesCodes } from '../../constants';
import { UpdateMovieService } from '../../services/Movies';
import { CreateRelationship } from '../RoleForTheMovie';


class UpdateMovie {
    async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const { id } = req.params

            const { title, release_year, casting, directors, producers } = req.body

            const movieToUpdate: IMovie = { title, release_year }

            const { id: movieId,
                title: movieTitle,
                release_year: movie_releaseYear
            } = await new UpdateMovieService().handle(Number.parseInt(id), movieToUpdate)

            await new CreateRelationship().handle({ movieId, casting, directors, producers })

            return res.status(200).json([{ message: "Movie updated successfully" }, {
                id: movieId,
                title: movieTitle,
                release_year: movie_releaseYear
            }])
        } catch (error: any) {
            return res.status(500).json({
                error: {
                    message: error.message
                }
            })
        }
    }
}
export { UpdateMovie }