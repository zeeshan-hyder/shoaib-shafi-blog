const express        = require("express"),
      app            = express(),
      bodyparser     = require("body-parser");



app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

//requiring routes
const Routes = require("./routes/routes");

app.use(Routes);

app.listen(process.env.PORT||'3000', process.env.IP, ()=>{
    console.log("Blog server is running on port 3000");
});