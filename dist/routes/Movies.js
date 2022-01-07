"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');
var _Movies = require('../controllers/Movies');

var _AuthMiddleware = require('../middlewares/AuthMiddleware');

const moviesRouter = _express.Router.call(void 0, );

moviesRouter.use('/movies*', (req, res, next) => {
    const protectedMethods = ["POST", "PUT", "DELETE"]

    if (protectedMethods.includes(req.method)) {
        next();
    }
}, new (0, _AuthMiddleware.AuthMiddleware)().handle)

    .post('/movies', new (0, _Movies.CreateMovie)().handle)
    .get('/movies', new (0, _Movies.GetMovies)().handle)
    .get('/movies/:id', new (0, _Movies.GetMovie)().handle)
    .put('/movies/:id', new (0, _Movies.UpdateMovie)().handle)
    .delete('/movies/:id', new (0, _Movies.DeleteMovie)().handle)

exports. default = moviesRouter