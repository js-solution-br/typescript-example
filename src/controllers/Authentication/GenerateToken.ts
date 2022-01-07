import jwt from 'jsonwebtoken';
import { salt_key } from '../../constants';


class GenerateToken {
    public handle(email:string) {
        const token = jwt.sign({ email }, salt_key, { expiresIn: '365d' })
        return token
    }
}
export {GenerateToken}

