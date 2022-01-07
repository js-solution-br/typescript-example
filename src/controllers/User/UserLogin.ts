
import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import { SignAccessToken } from '../Authentication/SignAccessToken';
import { UserLoginService } from '../../services/User';

class UserLogin {
    async handle(req: Request, res: Response) {
        const { username, email, password } = req.body;
        const user: any = await new UserLoginService().handle(username).catch(error => {
            return res.json({ error })
        })
   
        const checkPassword = bcrypt.compareSync(password, user.password)
        if (!checkPassword) return res.status(500).json({error:'Email address or password not valid'})
        delete user.password
        const accessToken = await new SignAccessToken().handle(user)
        return res.json({ ...user, accessToken })
    }
}
export { UserLogin }