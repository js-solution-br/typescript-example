"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _client = require('@prisma/client');

const prisma = new (0, _client.PrismaClient)();

class CreateUserService {
    async handle(user) {

        const createdPerson = await prisma.user.create({
            data: {
                username:user.username,
                email:user.email,
                password:user.password
            }
        })

        return createdPerson
    }
}
exports.CreateUserService = CreateUserService;