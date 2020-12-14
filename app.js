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

    const message2 = {

            type: "text",
            text: "\uDBC0\uDC84 LINE original emoji",
          
    }
    const message3 = 
        {
            "type": "image",
            "originalContentUrl": "https://scontent-kut2-1.xx.fbcdn.net/v/t1.0-9/117892868_3165357106881401_2541502139840212849_n.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeF8F1dLVZbSM1o4hYsNHdhcE05lkXgQmnATTmWReBCacAeXgBbsqQgLwRomnfJGHbZn0P16xNItC6jxcUgTZA99&_nc_ohc=dO_JwQTJ6WsAX-Fh91m&_nc_ht=scontent-kut2-1.xx&oh=a55b878dbfccf2997b986bb335650ec0&oe=5FFD97DD",
            "previewImageUrl": "https://scontent-kut2-1.xx.fbcdn.net/v/t1.0-9/117892868_3165357106881401_2541502139840212849_n.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeF8F1dLVZbSM1o4hYsNHdhcE05lkXgQmnATTmWReBCacAeXgBbsqQgLwRomnfJGHbZn0P16xNItC6jxcUgTZA99&_nc_ohc=dO_JwQTJ6WsAX-Fh91m&_nc_ht=scontent-kut2-1.xx&oh=a55b878dbfccf2997b986bb335650ec0&oe=5FFD97DD"
        }
          
    

    client.replyMessage(request,[message,message2,message3])
    .then(()=> console.log('work'))
    .catch(err=>console.error(err))
   

})

app.listen(PORT,console.log(`server is working on ${PORT}`))