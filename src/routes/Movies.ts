import { Router } from 'express';
import { CreateMovie, DeleteMovie, GetMovie, GetMovies, UpdateMovie } from '../controllers/Movies';
import { NextFunction, Request, Response } from 'express'
import { AuthMiddleware } from '../middlewares/AuthMiddleware';

const moviesRouter = Router();

moviesRouter.use('/movies*', (req: Request, res: Response, next: NextFunction) => {
    const protectedMethods = ["POST", "PUT", "DELETE"]

    if (protectedMethods.includes(req.method)) {
        new AuthMiddleware().handle(req,res,next)
    }
})
    .post('/movies', new CreateMovie().handle)
    .get('/movies', new GetMovies().handle)
    .get('/movies/:id', new GetMovie().handle)
    .put('/movies/:id', new UpdateMovie().handle)
    .delete('/movies/:id', new DeleteMovie().handle)

export default moviesRouter