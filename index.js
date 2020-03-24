const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars')
const nodemailer = require("nodemailer");
const path = require('path')
require("dotenv").config();

const app = express();


app.use('/public', express.static(path.join(__dirname, "public")));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
    res.render('index');
});

app.post("/send", (req, res) => {

    const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
        <li>Name: ${req.body.name}</li>
        <li>Name: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
    
    `




    let transporter = nodemailer.createTransport({
        host: "smtp-relay.sendinblue.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.SENDINBLUE_USER,
            pass: process.env.SENDINBLUE_PASSWORD
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let mailOptions = {

        from: "portfolio" + process.env.SENDINBLUE_user,
        to: 'alexiss.diaz@live.com',
        subject: "Portfolio Message",
        html: output
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }

        console.log("Message sent: %s", info.messageId);

        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        res.render('index', { msg: 'Email has been sent!' });
        event.preventDefault();

    });
});

// main().catch(console.error);

app.listen(3000, () => console.log('Sever started...'));