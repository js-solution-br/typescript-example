"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _Roles = require('../../services/Roles');

class GetAllRoles {
    async handle(req, res) {
        const roles = await new (0, _Roles.GetAllRolesService)().handle()

        return res.json(roles);
    }
}
exports.GetAllRoles = GetAllRoles;