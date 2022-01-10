import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class GetPersonService {
    async handle(id: number): Promise<IPerson | any> {

        const person: IPerson | any = await prisma.person.findUnique({ where: { id } })

        return person
    }
}
export { GetPersonService }