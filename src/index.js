console.log("Using Promist to read json File in node.js");
let fileManager = require('./fileManager');
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    "service": "gmail",
    "auth": {
        "user": "dronesinhawaii@gmail.com",
        "pass": "rtmaadzlffqkmjva"                  // app access code.
    }
});

let jsonObject = fileManager.readJsonFile('./jsonfile.json');
console.log(`email list = ${jsonObject["emails"]}`);

let mailOptions = {
    from: 'dronesinhawaii@gmail.com',
    to: '',
    subject: "I'm here for you 👋",
    text: 'My name is Daniel, I came across your Instagram page and I thought I would reach out personally'
};

for (let email of jsonObject["emails"]) {
    mailOptions.to = email;
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(`Error while sending mail to ${email}: ${error}`);
        } else {
            console.log(`Email sent to ${email}: ${info.response}`)
        }
    });
}

