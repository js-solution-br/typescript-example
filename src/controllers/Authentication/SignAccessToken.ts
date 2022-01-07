import jwt from 'jsonwebtoken';
import { salt_key } from '../../constants';

class SignAccessToken {
    public handle(payload) {
        return new Promise((resolve, reject) => {
            jwt.sign({ payload }, salt_key, {
            }, (err, token) => {
                if (err) {
                    reject("Internal Error")
                }
                resolve(token)
            })
        })
    }
}
export { SignAccessToken }
