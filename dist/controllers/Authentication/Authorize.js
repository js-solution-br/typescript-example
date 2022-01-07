"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _constants = require('../../constants');


class Authorize {
    async handle(token) {
        await _jsonwebtoken2.default.verify(token, _constants.salt_key, (error, decoded) => {
            if (error) {
                return false
            }
            return true;
        })
    }
}

exports.Authorize = Authorize;


