import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UpdateMovieService {
    async handle(id: number, movie) {
        const createdMovie = await prisma.movies.update({
            where: { id },
            data: {
                title: movie.title,
                release_year: movie.release_year
            }
        })

        return createdMovie
    }
}
export { UpdateMovieService }