import { PrismaClient } from "@prisma/client";
import { GetPersonService } from "../Person/GetPersonService";

const prisma = new PrismaClient();

class GetRoleService {
    async handle(roleId: number): Promise<IRole> {
        const role = await prisma.roles.findUnique({
            where: {
                id: roleId
            }
        });

        return role
    }
}
export { GetRoleService }