"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _constants = require('../../constants');


class GenerateToken {
     handle(email) {
        const token = _jsonwebtoken2.default.sign({ email }, _constants.salt_key, { expiresIn: '365d' })
        return token
    }
}
exports.GenerateToken = GenerateToken;

