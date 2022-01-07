import { PrismaClient } from "@prisma/client";
import { GetPersonService } from "../Person/GetPersonService";
import { GetRoleService } from "../Roles";

const prisma = new PrismaClient();

class GetPersonFromRoleService {
    async handle(moviesId:number, roleId: number): Promise<IPerson[]> {
        const relations = await prisma.role_for_the_movie.findMany({
            where: {
                moviesId, rolesId: roleId
            }
        });
        const casting: IPerson[] = [];

        for (const currentRelation of relations) {
            const person: any = await new GetPersonService().handle(currentRelation.personId)
            const role: IRole = await new GetRoleService().handle(roleId)

            person.role = role.title
            casting.push(person)
        }

        return casting
    }
}
export { GetPersonFromRoleService }