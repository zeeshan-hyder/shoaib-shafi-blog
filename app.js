require('dotenv').config()

const express        = require("express"),
      app            = express(),
      mongoose       = require("mongoose"),
      bodyparser     = require("body-parser");



app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

mongoose.connect(process.env.DATABASE_URI, {useNewUrlParser: true, useUnifiedTopology: true});
                   
//requiring routes
const Routes = require("./routes/routes");

app.use(Routes);

app.listen(process.env.PORT, process.env.IP, ()=>{
    console.log("Blog server is running");
});