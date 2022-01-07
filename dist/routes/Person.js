"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');

var _Person = require('../controllers/Person');
var _User = require('../controllers/User');
var _UserLogin = require('../controllers/User/UserLogin');
var _AuthMiddleware = require('../middlewares/AuthMiddleware');

const personRouter = _express.Router.call(void 0, );

personRouter.use('/person*', (req, res, next) => {
    const protectedMethods = ["POST","PUT","DELETE"]

    if (protectedMethods.includes(req.method)) {
        next();
    }
}, new (0, _AuthMiddleware.AuthMiddleware)().handle)

    .post('/person', new (0, _Person.CreatePerson)().handle)
    .get('/people', new (0, _Person.GetPeople)().handle)
    .post('/user', new (0, _User.CreateUser)().handle)
    .post('/user/login', new (0, _UserLogin.UserLogin)().handle)
    .get('/person/:id', new (0, _Person.GetPerson)().handle)
    .put('/person/:id', new (0, _Person.UpdatePerson)().handle)
    .delete('/person/:id', new (0, _Person.DeletePerson)().handle)


exports. default = personRouter