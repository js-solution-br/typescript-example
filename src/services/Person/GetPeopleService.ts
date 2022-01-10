import { PrismaClient } from "@prisma/client";
import { GetMoviesAsActorOrActressService, GetMoviesAsDirectorService, GetMoviesAsProducerService } from ".";

const prisma = new PrismaClient();

class GetPeopleService {
    async handle(): Promise<IPerson[]> {
        try{

            const people: IPerson[] = await prisma.person.findMany()
            
            const moviesArray = []
            
            for (const person in people) {
                const movies_as_actor_or_actress = await new GetMoviesAsActorOrActressService().handle(people[person].id!)
                const movies_as_director = await new GetMoviesAsDirectorService().handle(people[person].id!);
                const movies_as_producer = await new GetMoviesAsProducerService().handle(people[person].id!);
                
                const merged: IPerson = {
                    ...people[person],
                    movies_as_actor_or_actress,
                    movies_as_director,
                    movies_as_producer,
                }
                
                moviesArray.push(merged)
            }
            
            return moviesArray
        }catch(error:any){
            throw new Error("Internal Error.")
        }
    }
}
export { GetPeopleService }