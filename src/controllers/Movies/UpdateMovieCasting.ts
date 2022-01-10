import { NextFunction, Request, Response } from 'express'
import { RolesCodes } from '../../constants';
import { DeleteRelationShipService } from '../../services/RolesForMovies/DeleteRelationshiptService';
import { CreateRelationship } from '../RoleForTheMovie';


class UpdateMovieCasting {
    async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const { id: movieId } = req.params

            const { casting } = req.body

            await new DeleteRelationShipService()

            await new DeleteRelationShipService().handle(Number.parseInt(movieId), RolesCodes.ACTOR_ACTRESS)

            await new CreateRelationship().handle({ movieId: Number.parseInt(movieId), casting })

            return res.status(200).json({ message: "Casting updated successfully" })
        } catch (error: any) {
            return res.status(500).json({
                error: {
                    message: error.message
                }
            })
        }
    }
}
export { UpdateMovieCasting }