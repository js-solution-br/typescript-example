import { PrismaClient } from "@prisma/client";
import { RolesCodes } from "../../constants";
import { GetMovieService, GetMoviesService } from "../Movies";
import { GetPersonService } from "./GetPersonService";
import { GetRoleService } from "../Roles";

const prisma = new PrismaClient();

class GetMoviesAsDirectorService {
    async handle(personId:number): Promise<IMovie[]> {
        const relations = await prisma.role_for_the_movie.findMany({
            where: {
                personId, rolesId: RolesCodes.DIRECTOR
            }
        });
        const movies_as_director: IMovie[] = [];

        for (const currentRelation of relations) {
            const { id, title, release_year }: IMovie = await new GetMovieService().handle(currentRelation.moviesId)
            const movie: IMovie = { id, title, release_year }
            movies_as_director.push(movie)
        }

        return movies_as_director
    }
}
export { GetMoviesAsDirectorService }