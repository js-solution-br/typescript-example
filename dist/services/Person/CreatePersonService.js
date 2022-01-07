"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _client = require('@prisma/client');

const prisma = new (0, _client.PrismaClient)();

class CreatePersonService {
    async handle(person) {

        const createdPerson = await prisma.person.create({
            data: {
                first_name: person.first_name,
                last_name: person.last_name,
                aliases: person.aliases
            }
        })

        return createdPerson
    }
}
exports.CreatePersonService = CreatePersonService;