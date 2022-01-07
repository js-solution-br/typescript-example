
import { Request, Response } from 'express'
import { CreatePersonService } from '../../services/Person/CreatePersonService';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { SignAccessToken } from '../Authentication/SignAccessToken';
import { CreateUserService } from '../../services/User';
class CreateUser {
    async handle(req: Request, res: Response) {
        const { username, email, password } = req.body

        const personToCreate: IUser = { username, email, password }

        personToCreate.password = bcrypt.hashSync(personToCreate.password, 8);

        const create:IUser = await new CreateUserService().handle(personToCreate)

        create.token = await new SignAccessToken().handle(personToCreate);

        return res.json(create)
    }
}
export { CreateUser }
