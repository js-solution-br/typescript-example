"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _client = require('@prisma/client');


const prisma = new (0, _client.PrismaClient)();

class GetRoleService {
    async handle(roleId) {
        const role = await prisma.roles.findUnique({
            where: {
                id: roleId
            }
        });

        return role
    }
}
exports.GetRoleService = GetRoleService;