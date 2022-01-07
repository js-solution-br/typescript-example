"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);      
var _client = require('@prisma/client');
                             
var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);

class App {

    

    constructor() {
        
        this.express = _express2.default.call(void 0, )
        this.database()
        this.middlewares()
        this.routes()
    }

     middlewares() {
        this.express.use(_express2.default.json())
        this.express.use(_cors2.default.call(void 0, ))
    }

     database() {
        const prisma = new (0, _client.PrismaClient)();

        prisma.$connect().then(connection => {
            console.log('Database connected successfully')
        }).catch(error => {
            console.error('Error connecting to the database');
            throw new Error(error.message)
        });
    }

     routes() {
        this.express.use(_routes2.default)
    }                           
                                
}                                
exports. default = new App().express  