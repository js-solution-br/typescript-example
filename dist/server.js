"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _app = require('./app'); var _app2 = _interopRequireDefault(_app);

const port = process.env.PORT

_app2.default.listen(port)

// tslint:disable-next-line: no-console
console.log(`Server running at port ${port}`)