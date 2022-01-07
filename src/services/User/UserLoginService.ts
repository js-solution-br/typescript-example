
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UserLoginService {
    async handle(username: string) {

        const logged = await prisma.user.findUnique({
            where: {
                username
            }
        });
       
        if (!logged) {
            throw new Error('User not registered')
        }

   
        return logged
    }
}
export { UserLoginService }