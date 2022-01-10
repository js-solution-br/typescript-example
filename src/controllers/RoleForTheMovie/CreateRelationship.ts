import { RolesCodes } from "../../constants";
import { CreatePersonService, GetPersonService } from "../../services/Person";

import { CreateRelationShipService } from "../../services/RolesForMovies";

class CreateRelationship {
    async handle(data: IRelationship): Promise<void> {
        try {
            await this.createRelationshipForRole(data.movieId, data?.casting!, RolesCodes.ACTOR_ACTRESS)
            await this.createRelationshipForRole(data.movieId, data?.directors!, RolesCodes.DIRECTOR)
            await this.createRelationshipForRole(data.movieId, data?.producers!, RolesCodes.PRODUCER)
        } catch (error: any) {
            throw new Error("Error while creating Relation between movie and person")
        }
    }

    private async createRelationshipForRole(movieId: number, data: IPerson[], role: number) {
        if (data) {
            data.map(async (current: IPerson) => {
                if (!current.id && current.first_name) {
                    await new CreatePersonService().handle(current)
                        .then(async (person) => {
                            await new CreateRelationShipService().handle(movieId, person.id, role)
                        });
                } else {
                    const person: any = await new GetPersonService().handle(current.id!)
                    if (!person && current.first_name) {
                        await new CreatePersonService().handle(current)
                            .then(async (person) => {
                                await new CreateRelationShipService().handle(movieId, person.id, role)
                            });
                    }
                    if (person) {
                        await new CreateRelationShipService().handle(movieId, person.id, role)
                    }
                }
            })
        }
    }
}
export { CreateRelationship }