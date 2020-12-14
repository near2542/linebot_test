require('dotenv').config();

const line = require('@line/bot-sdk');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const channelAccessToken = process.env.access_token
const channelSecret = process.env.channel_secret
const config = {
    channelAccessToken: channelAccessToken ,
    channelSecret: channelSecret,
}

console.log(config)

const client = new line.Client(config);


app.post('/webhook',async (req,res) =>
{

    
    let request = req.body.events[0].replyToken
    let text = req.body.events[0].message.text
    let user = req.body.events[0].source.userId
    console.log(`request is ${request} \n 
                    text is ${text}\n
                    user is ${user}`)
   


    const message = {
        type:'text',
        text:`it's working bro!`,
    };

    client.replyMessage(user,message)
   

})

app.listen(PORT,console.log('server is working'))