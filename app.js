const express        = require("express"),
      app            = express(),
      mongoose       = require("mongoose"),
      bodyparser     = require("body-parser");



app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

mongoose.connect("mongodb+srv://Ali:12345@shabz.1fu7s.mongodb.net/shoaib?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true});
                   
//requiring routes
const Routes = require("./routes/routes");

app.use(Routes);

app.listen(process.env.PORT||'3000', process.env.IP, ()=>{
    console.log("Blog server is running on port 3000");
});