import { PrismaClient } from "@prisma/client";
import { GetPersonService } from "../Person/GetPersonService";

const prisma = new PrismaClient();

class GetAllRolesService {
    async handle(): Promise<IRole[]> {
        const role = await prisma.roles.findMany()

        return role
    }
}
export { GetAllRolesService }