import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class GetPersonService {
    async handle(id: number){

        const person = await prisma.person.findUnique({ where: { id } })

        return person
    }
}
export { GetPersonService }