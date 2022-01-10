import { PrismaClient } from "@prisma/client";
import { RolesCodes } from "../../constants";
import { Helpers } from "../../helpers";
import { GetPersonFromRoleService } from "../RolesForMovies";

const prisma = new PrismaClient();

class GetMovieService {
    async handle(id: number): Promise<any> {
        try {
            const movies: IMovie | any = await prisma.movies.findUnique({ where: { id } });

            if (!movies) {
                return []
            }

            const casting = await new GetPersonFromRoleService().handle(movies!.id, RolesCodes.ACTOR_ACTRESS)
            const directors = await new GetPersonFromRoleService().handle(movies!.id, RolesCodes.DIRECTOR)
            const producers = await new GetPersonFromRoleService().handle(movies!.id, RolesCodes.PRODUCER)
            const release_year = new Helpers().decimalToRoman(movies!.release_year)
            
            movies.release_year = release_year
            movies.casting = casting
            movies.directors = directors
            movies.producers = producers

            return movies
        } catch (error: any) {
            throw new Error("Internal Error.")
        }
    }
}
export { GetMovieService }