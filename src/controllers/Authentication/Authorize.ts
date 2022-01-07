import jwt from 'jsonwebtoken';
import { salt_key } from '../../constants';


class Authorize {
    async handle(token) {
        await jwt.verify(token, salt_key, (error, decoded) => {
            if (error) {
                return false
            }
            return true;
        })
    }
}

export { Authorize }


