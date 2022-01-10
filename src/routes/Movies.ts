import { Router } from 'express';
import { CreateMovie, DeleteMovie, GetMovie, GetMovies, UpdateMovie } from '../controllers/Movies';
import { NextFunction, Request, Response } from 'express'
import { AuthMiddleware } from '../middlewares/AuthMiddleware';
import { GetMovieCasting } from '../controllers/Movies/GetMovieCasting';
import { GetMovieDirectors } from '../controllers/Movies/GetMovieDirectors';
import { GetMovieProducers } from '../controllers/Movies/GetMovieProducers';

const moviesRouter = Router();

moviesRouter.use('/movies*', (req: Request, res: Response, next: NextFunction) => {
    const protectedMethods = ["POST", "PUT", "DELETE"]

    if (protectedMethods.includes(req.method)) {
        return new AuthMiddleware().handle(req,res,next)
    }
    next()
})
    .post('/movies', new CreateMovie().handle)
    .get('/movies', new GetMovies().handle)
    .get('/movies/:id', new GetMovie().handle)
    .get('/movies/:id/casting', new GetMovieCasting().handle)
    .get('/movies/:id/directors', new GetMovieDirectors().handle)
    .get('/movies/:id/producers', new GetMovieProducers().handle)
    .put('/movies/:id', new UpdateMovie().handle)
    .delete('/movies/:id', new DeleteMovie().handle)

export default moviesRouter