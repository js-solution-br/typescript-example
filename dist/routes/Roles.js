"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');

var _Roles = require('../controllers/Roles');

const rolesRouter = _express.Router.call(void 0, );

rolesRouter
    .get('/roles', new (0, _Roles.GetAllRoles)().handle)

exports. default = rolesRouter