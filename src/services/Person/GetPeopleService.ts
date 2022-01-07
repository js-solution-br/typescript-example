import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class GetPeopleService {
    async handle() {
        const people = await prisma.person.findMany()
        
        return people
    }
}
export { GetPeopleService }