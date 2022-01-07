import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UpdateMovieService {
    async handle(id: number, movie:IMovie) {
        const createdMovie = await prisma.movies.update({
            where: { id },
            data: {
                title: movie.title,
                release_year: Number.parseInt(movie.release_year!.toString())
            }
        }).catch(err=>{
            throw new Error("Invalid ID")
        })

        return createdMovie
    }
}
export { UpdateMovieService }