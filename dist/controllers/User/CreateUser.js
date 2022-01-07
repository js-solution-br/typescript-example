"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }



var _bcrypt = require('bcrypt'); var _bcrypt2 = _interopRequireDefault(_bcrypt);
var _SignAccessToken = require('../Authentication/SignAccessToken');
var _User = require('../../services/User');
class CreateUser {
    async handle(req, res) {
        const { username, email, password } = req.body

        const personToCreate = { username, email, password }

        personToCreate.password = _bcrypt2.default.hashSync(personToCreate.password, 8);

        const create = await new (0, _User.CreateUserService)().handle(personToCreate)

        create.token = await new (0, _SignAccessToken.SignAccessToken)().handle(personToCreate);

        return res.json(create)
    }
}
exports.CreateUser = CreateUser;
