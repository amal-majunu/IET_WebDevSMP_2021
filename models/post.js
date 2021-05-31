const mongoose = require("mongoose");

let blogSchema = new mongoose.Schema({
    title : String,
    content : String
});

module.exports = mongoose.model("Blogs", blogSchema);