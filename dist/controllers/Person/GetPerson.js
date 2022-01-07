"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _GetPersonService = require('../../services/Person/GetPersonService');

class GetPerson {
    async handle(req, res) {
        const { id } = req.params

        const person = await new (0, _GetPersonService.GetPersonService)().handle(Number.parseInt(id))

        return res.json(person)
    }
}
exports.GetPerson = GetPerson;