import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class CreateMovieService {
    async handle(movie: IMovie) {
        try {
            const createdMovie = await prisma.movies.create({
                data: {
                    title: movie.title,
                    release_year: Number.parseInt(movie.release_year!.toString())
                }
            })

            return createdMovie
        } catch (error: any) {
            throw new Error("Internal Error")
        }
    }
}
export { CreateMovieService }