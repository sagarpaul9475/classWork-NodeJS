const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    id: { type: Number, unique: true },
    url: {type:String,required:true},
    shortUrl: {type:String,required:true}
});

const url = mongoose.model("url", urlSchema);

module.exports = url;