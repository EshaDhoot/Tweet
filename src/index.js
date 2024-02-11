import express from 'express';
import { connect } from './config/database.js';
const app = express();
import service from './services/tweet-service.js'

const setupAndStartServer = () => {
    app.listen(3000, async () => {
        console.log("Server started at PORT: 3000");
        await connect();
        console.log('MongoDB connected');    
        const ser = new service();
        await ser.create({
            content: 'my other #COdE works or #NOT ?'
        })
       



    });
}

setupAndStartServer();