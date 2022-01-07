import { Router } from 'express';
import { NextFunction, Request, Response } from 'express'
import { CreatePerson, GetPerson, GetPeople, DeletePerson, UpdatePerson } from '../controllers/Person'
import { CreateUser } from '../controllers/User';
import { UserLogin } from '../controllers/User/UserLogin';
import { AuthMiddleware } from '../middlewares/AuthMiddleware';

const personRouter = Router();

personRouter.use('/person*', (req: Request, res: Response, next: NextFunction) => {
    const protectedMethods = ["POST","PUT","DELETE"]

    if (protectedMethods.includes(req.method)) {
        next();
    }
}, new AuthMiddleware().handle)

    .post('/person', new CreatePerson().handle)
    .get('/people', new GetPeople().handle)
    .post('/user', new CreateUser().handle)
    .post('/user/login', new UserLogin().handle)
    .get('/person/:id', new GetPerson().handle)
    .put('/person/:id', new UpdatePerson().handle)
    .delete('/person/:id', new DeletePerson().handle)


export default personRouter