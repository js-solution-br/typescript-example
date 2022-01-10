import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class DeleteMovieService {
    async handle(id: number) {
        try {

            await prisma.movies.delete({ where: { id } })
        } catch (error: any) {
            if (error.code == "P2025") {
                throw new Error("Please, provide a valid ID.")
            } else {
                throw new Error("Internal Error.")
            }
        }

        return true
    }
}
export { DeleteMovieService }