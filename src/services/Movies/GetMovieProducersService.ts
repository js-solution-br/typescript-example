import { PrismaClient } from "@prisma/client";
import { RolesCodes } from "../../constants";
import { Helpers } from "../../helpers";
import { GetPersonFromRoleService } from "../RolesForMovies";

const prisma = new PrismaClient();

class GetMovieProducersService {
    async handle(id: number): Promise<any> {
        try {
            const movies = await prisma.movies.findUnique({ where: { id } });

            if (!movies) {
                return []
            }

            const producers = await new GetPersonFromRoleService().handle(movies!.id, RolesCodes.PRODUCER);

            return producers
        } catch (error: any) {
            throw new Error("Internal Error.")
        }
    }
}
export { GetMovieProducersService }