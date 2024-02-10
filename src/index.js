const express = require('express');
const app = express();

const connect = require('./config/database');

PORT = 3000;
const setupAndStartServer = () => {
    app.listen(PORT, async () => {
        console.log("Server started at PORT:",PORT);
        await connect();
        console.log('MongoDB connected');     
    });
}

setupAndStartServer();