import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class DeletePersonService {
    async handle(id: number) {
        const person = await prisma.person.delete({
            where: {
                id
            }
        })

        return true
    }
}
export { DeletePersonService }