import { NextFunction, Request, Response } from 'express'
import { RolesCodes } from '../../constants';
import { UpdateMovieService } from '../../services/Movies';
import { CreateRelationship } from '../RoleForTheMovie';


class UpdateMovie {
    async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
        const { id } = req.params

        const { title, release_year, casting, directors, producers } = req.body

        const movieToUpdate: IMovie = { title, release_year }

        const { id: movieId,
            title: movieTitle,
            release_year: movie_releaseYear
        } = await new UpdateMovieService().handle(Number.parseInt(id), movieToUpdate)

        await new CreateRelationship().handle(movieId, RolesCodes.ACTOR_ACTRESS, casting)
        await new CreateRelationship().handle(movieId, RolesCodes.DIRECTOR, directors)
        await new CreateRelationship().handle(movieId, RolesCodes.PRODUCER, producers)

        return res.json([{ message: "Movie updated successfully" }, {
            id: movieId,
            title: movieTitle,
            release_year: movie_releaseYear
        }])
    }
}
export { UpdateMovie }