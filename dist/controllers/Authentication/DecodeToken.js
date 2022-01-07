"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _constants = require('../../constants');


class DecodeToken {
     handle(token) {
        return new Promise((resolve, reject) => {
            _jsonwebtoken2.default.verify(token, _constants.salt_key, (err, payload) => {
                if (err) {
                    const message = err.name == 'JsonWebTokenError' ? 'Unauthorized' : err.message
                    return reject("Unauthorized")
                }
                resolve(payload)
            })
        })
    }
}

exports.DecodeToken = DecodeToken;