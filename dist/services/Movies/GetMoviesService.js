"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _client = require('@prisma/client');
var _constants = require('../../constants');
var _shared = require('../../shared');
var _RolesForMovies = require('../RolesForMovies');

const prisma = new (0, _client.PrismaClient)();

class GetMoviesService {
    async handle() {
        const movies = await prisma.movies.findMany();
        const moviesArray = []

        for (let movie in movies) {

            const casting = await new (0, _RolesForMovies.GetPersonFromRoleService)().handle(movies[movie].id, _constants.RolesCodes.ACTOR_ACTRESS)
            const directors = await new (0, _RolesForMovies.GetPersonFromRoleService)().handle(movies[movie].id, _constants.RolesCodes.DIRECTOR)
            const producers = await new (0, _RolesForMovies.GetPersonFromRoleService)().handle(movies[movie].id, _constants.RolesCodes.PRODUCER)

            movies[movie].casting = casting
            movies[movie].directors = directors
            movies[movie].producers = producers

            moviesArray.push(movies[movie])
        }
        
        movies.map(async (movie) => {
            movie.release_year = await new (0, _shared.Shared)().decimalToRoman(movie.release_year)
        })

        return moviesArray
    }
}
exports.GetMoviesService = GetMoviesService;