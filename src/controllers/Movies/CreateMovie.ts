import { NextFunction, Request, Response } from 'express'
import { CreateMovieService } from '../../services/Movies';
import { CreateRelationship } from '../RoleForTheMovie';

class CreateMovie {
    async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const { title, release_year, casting, directors, producers } = req.body

            const movieToCreate: IMovie = { title, release_year }

            const { id: movieId,
                title: movieTitle,
                release_year: movie_releaseYear
            } = await new CreateMovieService().handle(movieToCreate)

            await new CreateRelationship().handle({ movieId, casting, directors, producers })

            return res.status(200).json([{ message: "Movie created successfully" }, {
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
export { CreateMovie }