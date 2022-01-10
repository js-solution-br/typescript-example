import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UpdateMovieService {
    async handle(id: number, movie: IMovie) {
        const createdMovie = await prisma.movies.update({
            where: { id },
            data: {
                title: movie.title,
                release_year: Number.parseInt(movie.release_year!.toString())
            }
        }).catch((error: any) => {
            if (error.code == "P2025") {
                throw new Error("Please, provide a valid ID")
            } else {
                throw new Error("Internal Error")
            }
        })

        return createdMovie
    }
}
export { UpdateMovieService }