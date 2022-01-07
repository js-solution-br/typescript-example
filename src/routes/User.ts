import { Router } from 'express';

import { CreateUser, UserLogin } from '../controllers/User';

const userRouter = Router();

userRouter
    .post('/user', new CreateUser().handle)
    .post('/user/login', new UserLogin().handle)
export default userRouter