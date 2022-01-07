"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _client = require('@prisma/client');

const prisma = new (0, _client.PrismaClient)();

class GetPeopleService {
    async handle() {
        const people = await prisma.person.findMany()
        
        return people
    }
}
exports.GetPeopleService = GetPeopleService;