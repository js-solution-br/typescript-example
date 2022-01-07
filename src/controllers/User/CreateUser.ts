
import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import { SignAccessToken } from '../Authentication/SignAccessToken';
import { CreateUserService } from '../../services/User';
class CreateUser {
    async handle(req: Request, res: Response) {
        const { username, email, password } = req.body

        const personToCreate: IUser = { username, email, password }

        personToCreate.password = bcrypt.hashSync(password, 8);

        const create: IUser = await new CreateUserService().handle(personToCreate)
        if (!create.code) {
            create.token = await new SignAccessToken().handle(personToCreate);

            return res.json(create)
        } else {
            return res.json({ error: "Error while creating a new user" })
        }

    }
}
export { CreateUser }
