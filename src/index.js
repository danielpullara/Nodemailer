console.log("Using Promist to read json File in node.js");
let fileManager = require('./fileManager');
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'dronesinhawaii@gmail.com',
        // pass: 'Argentina31!'
    }
});

fileManager.readJsonFile('./src/jsonfile.json').then((jsonObject) => {
    console.log(`email list = ${jsonObject["emails"]}`);
    
    
    let mailOptions = {
        from: 'dronesinhawaii@gmail.com',
        to: jsonObject["emails"],
        subject:"I'm here for you 👋",
        text: 'My name is Daniel, I came across your Instagram page and I thought I would reach out personally'
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response)
        }
    });
});

