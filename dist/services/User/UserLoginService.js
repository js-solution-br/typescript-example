"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _client = require('@prisma/client');

const prisma = new (0, _client.PrismaClient)();

class UserLoginService {
    async handle(username) {

        const logged = await prisma.user.findUnique({
            where: {
                username
            }
        });
       
        if (!logged) {
            throw new Error('User not registered')
        }

   
        return logged
    }
}
exports.UserLoginService = UserLoginService;