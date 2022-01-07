"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _client = require('@prisma/client');

const prisma = new (0, _client.PrismaClient)();

class GetPersonService {
    async handle(id){

        const person = await prisma.person.findUnique({ where: { id } })

        return person
    }
}
exports.GetPersonService = GetPersonService;