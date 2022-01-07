# Twine Movies API
This project is a code challenge from twine where I should build an API for: movies / person

## Technologies
NodeJS, Typescript, Prisma (for MYSQL), JWT, Swagger

I decided to use Typescript insted of Ecmasript because I think it is easier to understand the code once I have used classes for everything an data types. for example: I had to deal with movies information so, I've created a Movies Inferface which holds each type of each property of the movie (id:integer, title:string, release_year:integer)

Talking about the database, I decided to use a relational database because it is easier to deal with the relations between people, movies and roles, so I've created a table for the roles and I've also created a seed to insert the roles into the database because it is not possible to create new roles (you only have 3 possible roles in this challenge). I've created another table for the people, another for the movies and a last one for the users

# How to use:
Clone the repository
create a ".env" file in your root directory an put "DATABASE_URL", "PORT", "SALT_KEY" as below
observation: cofigure the DATABASE_URL with true infromation

    DATABASE_URL="mysql://user:password@host:port/database?schema=public"
    PORT=3333
    SALT_KEY=Qwedsazxc-cxzdsaewQ

    use "npm install" to install the dependencies
    use "npm run config-prisma" to configure the database
    use "npm run dev" to run the project
