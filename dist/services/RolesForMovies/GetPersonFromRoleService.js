"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _client = require('@prisma/client');
var _GetPersonService = require('../Person/GetPersonService');
var _Roles = require('../Roles');

const prisma = new (0, _client.PrismaClient)();

class GetPersonFromRoleService {
    async handle(moviesId, roleId) {
        const relations = await prisma.role_for_the_movie.findMany({
            where: {
                moviesId
            }
        });
        const casting = [];


        for (const currentRelation of relations) {
            const person = await new (0, _GetPersonService.GetPersonService)().handle(currentRelation.personId)
            const role = await new (0, _Roles.GetRoleService)().handle(roleId)

            person.role = role.title
            casting.push(person)
        }

        return casting
    }
}
exports.GetPersonFromRoleService = GetPersonFromRoleService;