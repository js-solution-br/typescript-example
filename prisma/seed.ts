import {roles} from './roles'
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    for(let role of roles){
        await prisma.roles.create({
            data:role
        })
    }
}

main().catch(e=>{
    console.log(e);
    process.exit(1);
}).finally(()=>{
    prisma.$disconnect()
})