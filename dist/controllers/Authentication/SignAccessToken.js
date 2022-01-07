"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _constants = require('../../constants');

class SignAccessToken {
     handle(payload) {
        return new Promise((resolve, reject) => {
            _jsonwebtoken2.default.sign({ payload }, _constants.salt_key, {
            }, (err, token) => {
                if (err) {
                    reject("Internal Error")
                }
                resolve(token)
            })
        })
    }
}
exports.SignAccessToken = SignAccessToken;
