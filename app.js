require('dotenv').config();

const line = require('@line/bot-sdk');
const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 4000
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.use('/image', express.static('image'));
const channelAccessToken = process.env.access_token
const channelSecret = process.env.channel_secret
const config = {
    channelAccessToken: channelAccessToken ,
    channelSecret: channelSecret,
}


const client = new line.Client(config);


app.post('/webhook',(req,res) =>
{

    
    let request = req.body.events[0].replyToken
    let text = req.body.events[0].message.text
    let user = req.body.events[0].source.userId

    console.log(req.body)

    console.log(req.body.events[0])

    const message = {
        type:'text',
        text:'its working',
    };
    
    client.replyMessage(request,message)
    .then(()=> console.log('work'))
    .then(()=>{
                console.log(`it's done`)})
    .catch(err=>{
        console.error(err);
        res.sendStatus(400);})
   
    
    client.pushMessage(user,message).then(()=> {console.log('work on push'); })

    res.sendStatus(200);

})

app.listen(PORT,console.log(`server is working on ${PORT}`))