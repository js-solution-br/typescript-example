import { PrismaClient } from "@prisma/client";
import { RolesCodes } from "../../constants";
import { Helpers } from "../../helpers";
import { GetPersonFromRoleService } from "../RolesForMovies";

const prisma = new PrismaClient();

class GetMoviesService {
    async handle(): Promise<IMovie[]> {
        try {

            const movies = await prisma.movies.findMany();
            const moviesArray: IMovie[] = []

            for (let movie in movies) {
                const casting = await new GetPersonFromRoleService().handle(movies[movie].id, RolesCodes.ACTOR_ACTRESS)
                const directors = await new GetPersonFromRoleService().handle(movies[movie].id, RolesCodes.DIRECTOR)
                const producers = await new GetPersonFromRoleService().handle(movies[movie].id, RolesCodes.PRODUCER)
                const release_year = new Helpers().decimalToRoman(movies[movie].release_year)

                const merged: IMovie = {
                    ...movies[movie],
                    release_year,
                    casting,
                    directors,
                    producers,
                }

                moviesArray.push(merged)
            }
            return moviesArray
        } catch (error: any) {
            throw new Error("Internal Error.")
        }
    }
}
export { GetMoviesService }