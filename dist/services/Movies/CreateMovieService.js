"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _client = require('@prisma/client');

const prisma = new (0, _client.PrismaClient)();

class CreateMovieService {
    async handle(movie) {
        const createdMovie = await prisma.movies.create({
            data: {
                title: movie.title,
                release_year: movie.release_year
            }
        })

        return createdMovie
    }
}
exports.CreateMovieService = CreateMovieService;