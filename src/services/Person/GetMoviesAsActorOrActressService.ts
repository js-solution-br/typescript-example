import { PrismaClient } from "@prisma/client";
import { RolesCodes } from "../../constants";
import { GetMovieService, GetMoviesService } from "../Movies";

const prisma = new PrismaClient();

class GetMoviesAsActorOrActressService {
    async handle(personId:number): Promise<IMovie[]> {
        const relationsCasting = await prisma.role_for_the_movie.findMany({
            where: {
                personId, rolesId: RolesCodes.ACTOR_ACTRESS
            }
        });
        const movies_as_actor_or_actress: IMovie[] = [];

        for (const currentRelation of relationsCasting) {
            const { id, title, release_year }: IMovie = await new GetMovieService().handle(currentRelation.moviesId)
            const movie: IMovie = { id, title, release_year }
            movies_as_actor_or_actress.push(movie)
        }

        return movies_as_actor_or_actress
    }
}
export { GetMoviesAsActorOrActressService }