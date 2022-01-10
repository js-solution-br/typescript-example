import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class DeleteRelationShipService {
    async handle(moviesId: number, rolesId: number) {
        const createdMovie = await prisma.role_for_the_movie.deleteMany({
            where: {
                moviesId, AND: {
                    rolesId
                }
            }
        })

        return createdMovie
    }
}
export { DeleteRelationShipService }