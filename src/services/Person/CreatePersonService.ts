import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class CreatePersonService {
    async handle(person: IPerson) {

        const createdPerson = await prisma.person.create({
            data: {
                first_name: person.first_name,
                last_name: person.last_name,
                aliases: person.aliases
            }
        })

        return createdPerson
    }
}
export { CreatePersonService }