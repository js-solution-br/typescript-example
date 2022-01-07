import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class CreateMovieService {
    async handle(movie: IMovie) {
        const createdMovie = await prisma.movies.create({
            data: {
                title: movie.title,
                release_year: Number.parseInt(movie.release_year!.toString())
            }
        })

        return createdMovie
    }
}
export { CreateMovieService }