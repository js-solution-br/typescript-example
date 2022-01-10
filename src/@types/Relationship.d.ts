declare interface IRelationship {
    movieId: number,
    casting?: IPerson[],
    directors?: IPerson[],
    producers?: IPerson[],
}