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


app.post('/webhook',async (req,res) =>
{
    let request = req.body.events[0].replyToken
    let text = req.body.events[0].message.text
    let user = req.body.events[0].source.userId

    if(!request ) res.sendStatus(400);

    client.replyMessage('user',`it's working bro!`)
    .catch(err => console.err(err))

})

app.listen(PORT,console.log('server is working'))