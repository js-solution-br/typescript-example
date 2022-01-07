import { DecodeToken } from "../controllers/Authentication/DecodeToken"
const createError = require('http-errors')

class AuthMiddleware {
    async handle(req, res, next) {
        if (!req.headers.authorization) {
            return res.status(403).json({ error: 'Access token is required' })
        }
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
            return res.status(401).json({ error: "Unauthorized" })
        }
        await new DecodeToken().handle(token).then(user => {
            req.user = user
            next()
        }).catch(e => {
            return res.status(401).json({ error: "Unauthorized" })
        })
    }
}
export { AuthMiddleware } 