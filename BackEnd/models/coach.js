// Schema: Creating a blueprint for the model and export that format to express server and eventually link it to routes/CRUD operations
const mongoose = require("mongoose")
const coachSchema =  new mongoose.Schema({
    name: String,
    hometown: String,
    coaching_experience: String
})

const Coach = mongoose.model("Coach", coachSchema)

module.exports = Coach