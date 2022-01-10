import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class CreatePersonService {
    async handle(person: IPerson): Promise<IPerson | any> {
        if (!person.first_name || !person.last_name) {
            throw new Error("Invalid data provided.")
        } try {
            const createdPerson = await prisma.person.create({
                data: {
                    first_name: person.first_name!,
                    last_name: person.last_name!,
                    aliases: person.aliases!
                }
            })
            return createdPerson
        } catch (error) {
            throw new Error("Internal error.")
        }
    }
}
export { CreatePersonService }