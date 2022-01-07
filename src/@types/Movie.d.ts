declare interface IMovie {
    id?: number,
    title: string,
    release_year?: number | string,
    casting?: IPerson[],
    directors?: IPerson[];
    producers?: IPerson[]
}