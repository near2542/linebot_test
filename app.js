require('dotenv').config();

const line = require('@line/bot-sdk');
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 4000
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

const channelAccessToken = process.env.access_token
const channelSecret = process.env.channel_secret
const config = {
    channelAccessToken: channelAccessToken ,
    channelSecret: channelSecret,
}

console.log(config)

const client = new line.Client(config);


app.post('/webhook',(req,res) =>
{

    
    let request = req.body.events[0].replyToken
    let text = req.body.events[0].message.text
    let user = req.body.events[0].source.userId

    console.log(req.body)

    const message = {
        type:'text',
        text:'its working',
    };

    client.replyMessage(user,message)
    .then(res => console.log(res))
    .then(()=> console.log('work'))
    .catch(err=>console.error(err))
   

})

app.listen(PORT,console.log(`server is working on ${PORT}`))