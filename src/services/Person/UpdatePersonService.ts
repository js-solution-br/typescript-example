import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UpdatePersonService {
    async handle(id: number, person: IPerson) {

        const updatedPerson = await prisma.person.update({
            where: { id },
            data: {
                first_name: person.first_name,
                last_name: person.last_name,
                aliases: person.aliases
            }
        });

        return updatedPerson
    }
}
export { UpdatePersonService }