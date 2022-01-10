import jwt, { Secret } from 'jsonwebtoken';
import { salt_key } from '../../constants';
class DecodeToken {
    public handle(token:string) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, salt_key!, (err, payload) => {
                if (err) {
                    const message = err.name == 'JsonWebTokenError' ? 'Unauthorized' : err.message
                    return reject("Unauthorized")
                }
                resolve(payload)
            })
        })
    }
}

export {DecodeToken}