// Schema: Creating a blueprint for the model and export that format to express server and eventually link it to routes/CRUD operations
const mongoose = require("mongoose")
const commentSchema =  new mongoose.Schema({
    name: String,
    body:  String
})

const Comment = mongoose.model("Comment", commentSchema)

module.exports = Comment