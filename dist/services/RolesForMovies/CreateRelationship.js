"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _client = require('@prisma/client');

const prisma = new (0, _client.PrismaClient)();

class CreateRelationShipService {
    async handle(moviesId, personId, rolesId) {
        const createdMovie = await prisma.role_for_the_movie.create({
            data: {
                rolesId, moviesId,personId
            }
        })

        return createdMovie
    }
}
exports.CreateRelationShipService = CreateRelationShipService;