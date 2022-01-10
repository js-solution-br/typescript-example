import { NextFunction, Request, Response } from 'express'
import { RolesCodes } from '../../constants';
import { DeleteRelationShipService } from '../../services/RolesForMovies/DeleteRelationshiptService';
import { CreateRelationship } from '../RoleForTheMovie';


class UpdateMovieDirectors {
    async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const { id: movieId } = req.params

            const { directors } = req.body

            await new DeleteRelationShipService()

            await new DeleteRelationShipService().handle(Number.parseInt(movieId), RolesCodes.DIRECTOR)

            await new CreateRelationship().handle({ movieId: Number.parseInt(movieId), directors })

            return res.status(200).json({ message: "Directors updated successfully" })
        } catch (error: any) {
            return res.status(500).json({
                error: {
                    message: error.message
                }
            })
        }
    }
}
export { UpdateMovieDirectors }