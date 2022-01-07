"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _CreatePersonService = require('../../services/Person/CreatePersonService');

class CreatePerson {
    async handle(req, res) {
        const { first_name, last_name, aliases } = req.body

        const personToCreate = { first_name, last_name, aliases }

        const create = await new (0, _CreatePersonService.CreatePersonService)().handle(personToCreate)

        return res.json(create);
    }
}
exports.CreatePerson = CreatePerson;