"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _GetPeopleService = require('../../services/Person/GetPeopleService');;

class GetPeople {
    async handle(req, res) {
        const people = await new (0, _GetPeopleService.GetPeopleService)().handle()
        
        return res.json(people)
    }
}
exports.GetPeople = GetPeople;