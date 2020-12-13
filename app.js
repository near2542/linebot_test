require('dotenv').config();

const line = require('@line/bot-sdk');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000

const channelAccessToken = process.env.access_token
const channelSecret = process.env.channel_secret
const config = {
    channelAccessToken: channelAccessToken ,
    channelSecret: channelSecret,
}

const client = new line.Client(config);

app.get('/',async (req,res)=>
{
    res.send('ok');
})

app.post('/webhook',async (req,res) =>
{
    let request = req.body.events[0].replyToken
    res.send('Work')
})

app.listen(4000,console.log('server is working'))