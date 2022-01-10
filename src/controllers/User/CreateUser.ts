
import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import { SignAccessToken } from '../Authentication/SignAccessToken';
import { CreateUserService } from '../../services/User';
class CreateUser {
    async handle(req: Request, res: Response): Promise<Response | any> {
        const { username, email, password } = req.body

        const personToCreate: IUser = { username, email, password }

        personToCreate.password = bcrypt.hashSync(password, 8);

        try {
            const user: IUser = await new CreateUserService().handle(personToCreate)

            user.token = await new SignAccessToken().handle(personToCreate);

            return res.json(user)

        } catch (error: any) {
            res.status(500).json({
                error: {
                    message: error.message
                }
            })
        }

    }
}
export { CreateUser }
