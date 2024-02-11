const express = require('express');
const app = express();

const connect = require('./config/database');
const TweetService = require('./services/tweet-service');

PORT = 3000;
const setupAndStartServer = () => {
    app.listen(PORT, async () => {
        console.log("Server started at PORT:",PORT);
        await connect();
        console.log('MongoDB connected');    
        // const service = new TweetService();
        // const response =  await service.create({
        //     content: 'is #tweets working? '
        // })
        // console.log(response);

    });
}

setupAndStartServer();