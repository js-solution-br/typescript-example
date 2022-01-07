"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _client = require('@prisma/client');


const prisma = new (0, _client.PrismaClient)();

class GetAllRolesService {
    async handle() {
        const role = await prisma.roles.findMany()

        return role
    }
}
exports.GetAllRolesService = GetAllRolesService;