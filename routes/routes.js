require('dotenv').config()

const express = require("express");
const router  = express.Router();
const sgMail  = require('@sendgrid/mail');
const Message = require("../models/messages");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);


router.get('/', (req,res) => {
    let title = {
        text: "Shoaib Shafi - Freelance Writer"
    }
    res.render("home", {title});
});

router.get('/about', (req,res) => {
    let title = {
        text: "ABOUT - Shoaib Shafi"
    }
    res.render("about", {title});
});

router.get('/articles', (req, res) => {
    let title = {
        text: "ARTICLES & ESSAYS - Shoaib Shafi"
    }
    res.render("articles", {title});
});

router.get('/contact', (req,res) => {
    let title = {
        text: "CONTACT - Shoaib Shafi"
    }
    res.render("contact",{title});
});

router.get('/thankyou', (req, res) => {
    let title = {
        text: "THANK YOU - Shoaib Shafi"
    }
    res.render("thankyou", {title});
});

router.post("/contact", async (req, res) => {

    let messageDetails = {
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    }

    let message = await new Message(messageDetails);
    await message.save();
    
    let SenderEmail = process.env.SENDER_EMAIL;
    let ReceiverEmail = process.env.RECEIVER_EMAIL;
    
    // compile the mail
    const msg = {
        to: ReceiverEmail,
        from: SenderEmail, 
        subject: 'Shoaib Shafi, Mail From ' + req.body.name,
        text: `Name: `+req.body.name+`\n\n`+
        `Email: ` + req.body.email+`\n\n`+
        `Message: `+req.body.message +` `.replace(/    /g, ''),
    };
    
    // send the mail
    await sgMail.send(msg);
    console.log("contact mail sent to admin");

    res.redirect('/thankyou');
});


module.exports = router;
