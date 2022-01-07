import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class DeleteMovieService {
    async handle(id: number) {
        const deletedMovie = await prisma.movies.delete({where: { id }})

        return true
    }
}
export { DeleteMovieService }