const express = require("express");
const router  = express.Router();

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


module.exports = router;