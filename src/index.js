const express = require('express');
const app = express();

const connect = require('./config/database');

const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');
PORT = 3000;
const setupAndStartServer = () => {
    app.listen(PORT, async () => {
        console.log("Server started at PORT:",PORT);
        await connect();
        console.log('MongoDB connected');
        // const tweet  = await Tweet.create({
        //     content: 'Third tweet',
        // });
        // console.log(tweet);

        const tweetRepo = new TweetRepository();
        const tweet = await tweetRepo.getWithComments("65c50d8993817084c936b6a2");
        console.log(tweet);
        // tweet.comments.push({content: 'comment model setup'});
        // await tweet.save();
        // console.log(tweet);
        // const comment = await Comment.create({content: 'new comment'});
        // console.log(tweet);
        // tweet.comments.push(comment);
        // await tweet.save();
        // console.log(tweet);
             
    });
}

setupAndStartServer();