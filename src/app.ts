import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'
import personRouter from './routes/Person'
import moviesRouter from './routes/Movies'
import rolesRouter from './routes/Roles'
import * as dotenv from "dotenv";

class App {

    public express: express.Application

    constructor() {
        dotenv.config({ path: '../.env' });
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

        this.express.use("*", (req, res, next) => {
            res.status(404).json({ error: "Endpoint not found!" });
        });

    }

}
export default new App().express  