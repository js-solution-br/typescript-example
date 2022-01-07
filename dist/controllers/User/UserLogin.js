"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _bcrypt = require('bcrypt'); var _bcrypt2 = _interopRequireDefault(_bcrypt);
var _SignAccessToken = require('../Authentication/SignAccessToken');
var _User = require('../../services/User');

class UserLogin {
    async handle(req, res) {
        const { username, email, password } = req.body;
        const user = await new (0, _User.UserLoginService)().handle(username).catch(error => {
            return res.json({ error })
        })
   

        const checkPassword = _bcrypt2.default.compareSync(password, user.password)
        if (!checkPassword) return res.status(500).json({error:'Email address or password not valid'})
        delete user.password
        const accessToken = await new (0, _SignAccessToken.SignAccessToken)().handle(user)
        return res.json({ ...user, accessToken })
    }
}
exports.UserLogin = UserLogin;