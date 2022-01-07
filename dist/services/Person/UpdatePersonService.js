"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _client = require('@prisma/client');

const prisma = new (0, _client.PrismaClient)();

class UpdatePersonService {
    async handle(id, person) {

        const updatedPerson = await prisma.person.update({
            where: { id },
            data: {
                first_name: person.first_name,
                last_name: person.last_name,
                aliases: person.aliases
            }
        });

        return updatedPerson
    }
}
exports.UpdatePersonService = UpdatePersonService;