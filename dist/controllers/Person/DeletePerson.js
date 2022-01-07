"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _DeletePersonService = require('../../services/Person/DeletePersonService');

class DeletePerson {
    async handle(req, res) {
        const { id } = req.params
        
        const person = new (0, _DeletePersonService.DeletePersonService)().handle(Number.parseInt(id))

        return res.json({ message: "Person deleted successfully" })
    }
}
exports.DeletePerson = DeletePerson;