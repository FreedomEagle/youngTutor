const express = require ('express');
const bodyParser = require ('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const app = express();
var nodemailer = require('nodemailer');

const senderMail = "norwalktutor@yahoo.com";

const transporter = nodemailer.createTransport({
            host: 'smtp.mail.yahoo.com',
            port: 465,
            service:'yahoo',
            secure: false,
            auth: {
               user: senderMail,
               pass: 'Flambe123!'
            },
            debug: false,
            logger: true  
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser())
app.use(express.static('public'));
const routes = require('./routes/satquestions.js')
app.use(routes)
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
app.post('/contact', function(req, res) {
    var mailOptions = {
        from: 'norwalktutor@yahoo.com',
        to: 'norwalk.youngson@gmail.com',
        subject: 'Tutoring Service Inquiry',
        text:"From: " + req.body.name+"\r\nContact Info:" +req.body.email+"\r\nComment:"+req.body.comment
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      res.redirect('index.html')
});


app.listen(3001,()=>{console.log("The application is running on port 3001");
}); 