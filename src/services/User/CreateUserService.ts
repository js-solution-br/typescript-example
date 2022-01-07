import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class CreateUserService {
    async handle(user: IUser) {

        const createdPerson = await prisma.user.create({
            data: {
                username:user.username,
                email:user.email,
                password:user.password
            }
        })

        return createdPerson
    }
}
export { CreateUserService }