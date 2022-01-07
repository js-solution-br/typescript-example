import { CreatePersonService, GetPersonService } from "../../services/Person";

import { CreateRelationShipService } from "../../services/RolesForMovies";

class CreateRelationship {
    async handle(movieId: number, role: number, array: IPerson[]) {
        try {

            if (array) {
                array.map(async (current: IPerson) => {
                    if (!current.id && current.first_name) {
                        await new CreatePersonService().handle(current)
                            .then(async (person) => {
                                await new CreateRelationShipService().handle(movieId, person.id, role)
                            });
                    } else {
                        const person: IPerson = await new GetPersonService().handle(current.id)
                        if (!person && current.first_name) {
                            await new CreatePersonService().handle(current)
                                .then(async (person) => {
                                    await new CreateRelationShipService().handle(movieId, person.id, role)
                                });
                        }
                        await new CreateRelationShipService().handle(movieId, person.id, role)
                    }
                })
            }
        } catch (error) {
            throw new Error("Error while creating Relation between movie and person")
        }
    }
}
export { CreateRelationship }