"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _GetPersonService = require('../../services/Person/GetPersonService');
var _CreatePersonService = require('../../services/Person/CreatePersonService');
var _Movies = require('../../services/Movies');
var _RolesForMovies = require('../../services/RolesForMovies');

class CreateMovie {
    async handle(req, res, next) {
        const { title, release_year, casting } = req.body

        const movieToCreate = { title, release_year }

        const { id: movieId } = await new (0, _Movies.CreateMovieService)().handle(movieToCreate)

        const castingArray = casting.map(async (current) => {
            if (!current.id && current.first_name && current.role) {
                const createdPerson = await new (0, _CreatePersonService.CreatePersonService)().handle(current)
                    .then(async (person) => {
                        const relationship = await new (0, _RolesForMovies.CreateRelationShipService)().handle(movieId, person.id, current.role)
                    });
            } else {
                const person = await new (0, _GetPersonService.GetPersonService)().handle(current.id)
                if (!person) {
                    const createdPerson = await new (0, _CreatePersonService.CreatePersonService)().handle(current)
                        .then(async (person) => {
                            const relationship = await new (0, _RolesForMovies.CreateRelationShipService)().handle(movieId, person.id, current.role)
                        });
                }
                const relationship = await new (0, _RolesForMovies.CreateRelationShipService)().handle(movieId, person.id, current.role)
            }

        })

        req.body.movieId = movieId

        return res.json({message:"Movie created successfully"})
    }
}
exports.CreateMovie = CreateMovie;