import TweetService from "../services/tweet-service.js";

const tweetService = new TweetService();

export const createTweet = async(req, res) => {
    try {
        const response = await tweetService.create(req.body);
        return res.status(201).json({
            success: true,
            message: 'Successfully created a  new tweet',
            err: {},
            data: response
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Unable to create a new tweet',
            err: error,
            data: {}
        })
    }
}