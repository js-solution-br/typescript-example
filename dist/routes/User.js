"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');

var _User = require('../controllers/User');

const userRouter = _express.Router.call(void 0, );

userRouter
    .post('/user', new (0, _User.CreateUser)().handle)
    .post('/user/login', new (0, _User.UserLogin)().handle)
exports. default = userRouter