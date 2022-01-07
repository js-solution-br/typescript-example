import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class CreateRelationShipService {
    async handle(moviesId: number, personId: number, rolesId: number) {
        const createdMovie = await prisma.role_for_the_movie.create({
            data: {
                rolesId, moviesId, personId
            }
        })

        return createdMovie
    }
}
export { CreateRelationShipService }