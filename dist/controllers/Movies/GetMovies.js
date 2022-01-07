"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _GetMoviesService = require('../../services/Movies/GetMoviesService');

class GetMovies {
    async handle(req, res) {
        const people = await new (0, _GetMoviesService.GetMoviesService)().handle();
        return res.json(people);
    }
}
exports.GetMovies = GetMovies;