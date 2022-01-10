import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class DeletePersonService {
    async handle(id: number) {
        try {
            await prisma.person.delete({
                where: {
                    id
                }
            })
        } catch (error: any) {
            if (error.code == "P2025") {
                throw new Error("Please, provide a valid ID")
            } else {
                throw new Error("Internal Error")
            }
        }
    }
}
export { DeletePersonService }