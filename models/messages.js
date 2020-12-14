const mongoose = require("mongoose");

let messageSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    Date: {type: Date, default: Date.now} 
});

module.exports = mongoose.model("Message", messageSchema);