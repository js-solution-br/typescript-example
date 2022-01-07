import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'
import personRouter from './routes/Person'
import moviesRouter from './routes/Movies'
import rolesRouter from './routes/Roles'
import swaggerUi = require('swagger-ui-express');
import fs = require('fs');
class App {

    public express: express.Application

    private swaggerFile: any = (process.cwd() + "/src/swagger.json");
    private swaggerData: any = fs.readFileSync(this.swaggerFile, 'utf8');
    private swaggerDocument = JSON.parse(this.swaggerData);
    /* Swagger files end */

    constructor() {
        this.express = express()
        this.database()
        this.middlewares()
        this.routes()
    }

    private middlewares(): void {
        this.express.use(express.json())
        this.express.use(cors())
    }

    private database(): void {
        const prisma = new PrismaClient();

        prisma.$connect().then(connection => {
            console.log('Database connected successfully')
        }).catch(error => {
            console.error('Error connecting to the database');
            throw new Error(error.message)
        });
    }

    private routes(): void {

        this.express.use(personRouter)
        this.express.use(moviesRouter)
        this.express.use(rolesRouter)

        // swagger docs
        var options = {
            swaggerOptions: {
                authAction: { JWT: { name: "JWT", schema: { type: "apiKey", in: "header", name: "Authorization", description: "" }, value: "Bearer <JWT>" } }
            }
        };
        this.express.use('/api/docs', swaggerUi.serve,
            swaggerUi.setup(this.swaggerDocument, options, null));
        this.express.use("/", (req, res, next) => {
            res.send("Welcome to twine API")
        })
        // handle undefined routes
        this.express.use("*", (req, res, next) => {
            res.status(404).send("Endpoint not found!");
        });

    }

}
export default new App().express  