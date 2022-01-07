"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _client = require('@prisma/client');

const prisma = new (0, _client.PrismaClient)();

class DeletePersonService {
    async handle(id) {
        const person = await prisma.person.delete({
            where: {
                id
            }
        })

        return true
    }
}
exports.DeletePersonService = DeletePersonService;