require('dotenv').config();

const line = require('@line/bot-sdk');
const express = require('express');
const app = express();

const channelAccessToken = process.env.channelAccessToken
const channelSecret = process.env.channelSecret
const config = {
    channelAccessToken: channelAccessToken ,
    channelSecret: channelSecret,
}

const client = new line.Client(config);

app.post('/webhook',async (req,res) =>
{
    let request = req.body.events[0].replyToken
})