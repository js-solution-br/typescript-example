declare interface IPerson {
    id?: number,
    person_id?:number,
    first_name?: string,
    last_name?: string,
    aliases?: string,
    role?: number | string,
    movies_as_actor_or_actress?: IMovie[],
    movies_as_director?: IMovie[],
    movies_as_producer?: IMovie[]
}