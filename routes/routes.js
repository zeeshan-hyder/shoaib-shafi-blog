const express = require("express");
const router  = express.Router();
const sgMail        = require('@sendgrid/mail');
const Message = require("../models/messages");

sgMail.setApiKey("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");


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

router.post("/contact", async (req, res) => {

    let messageDetails = {
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    }

    let message = await new Message(messageDetails);
    await message.save();
    
    let SenderEmail = 'shabbaralee@gmail.com';
    let ReceiverEmail = 'thezeeshanhyder@gmail.com';
    
    // compile the mail
    const msg = {
        to: ReceiverEmail,
        from: SenderEmail, 
        subject: 'Mail from a User - Shoaib Shafi',
        text: `Name: `+req.body.name+`\n\n`+
        `Email: ` + req.body.email+`\n\n`+
        `Message: `+req.body.message +` `.replace(/    /g, ''),
    };

    
    console.log(msg);
    
    // send the mail
    await sgMail.send(msg);
    console.log("An email has been sent");

    res.redirect('/');
});


module.exports = router;
