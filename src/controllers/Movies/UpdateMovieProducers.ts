import { NextFunction, Request, Response } from 'express'
import { RolesCodes } from '../../constants';
import { DeleteRelationShipService } from '../../services/RolesForMovies/DeleteRelationshiptService';
import { CreateRelationship } from '../RoleForTheMovie';


class UpdateMovieProducers {
    async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const { id: movieId } = req.params

            const { producers } = req.body

            await new DeleteRelationShipService()

            await new DeleteRelationShipService().handle(Number.parseInt(movieId), RolesCodes.PRODUCER)
            
            await new CreateRelationship().handle({ movieId: Number.parseInt(movieId), producers })

            return res.status(200).json({ message: "Producers updated successfully" })
        } catch (error: any) {
            return res.status(500).json({
                error: {
                    message: error.message
                }
            })
        }
    }
}
export { UpdateMovieProducers }