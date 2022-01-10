import { NextFunction, Request, Response } from 'express'
import { CreateMovieService } from '../../services/Movies';
import { RolesCodes } from '../../constants';
import { CreateRelationship } from '../RoleForTheMovie';

class CreateMovie {
    async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
        const { title, release_year, casting, directors, producers } = req.body

        const movieToCreate: IMovie = { title, release_year }

        const { id: movieId,
            title: movieTitle,
            release_year: movie_releaseYear
        } = await new CreateMovieService().handle(movieToCreate)

        await new CreateRelationship().handle(movieId, RolesCodes.ACTOR_ACTRESS, casting)
        await new CreateRelationship().handle(movieId, RolesCodes.DIRECTOR, directors)
        await new CreateRelationship().handle(movieId, RolesCodes.PRODUCER, producers)

        return res.json([{ message: "Movie created successfully" }, {
            id: movieId,
            title: movieTitle,
            release_year: movie_releaseYear
        }])
    }
}
export { CreateMovie }