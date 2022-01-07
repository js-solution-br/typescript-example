"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _UpdatePersonService = require('../../services/Person/UpdatePersonService');

class UpdatePerson {
    async handle(req, res) {
        const { id } = req.params
        const { first_name, last_name, aliases } = req.body

        const personToUpdate = { first_name, last_name, aliases }

        const people = new (0, _UpdatePersonService.UpdatePersonService)().handle(Number.parseInt(id), personToUpdate);

        return res.json(people)
    }
}
exports.UpdatePerson = UpdatePerson;