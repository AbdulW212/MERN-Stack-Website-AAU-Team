// Schema: Creating a blueprint for the model and export that format to express server and eventually link it to routes/CRUD operations
const mongoose = require("mongoose")
const playerSchema =  new mongoose.Schema({
    name: String,
    position:  String,
    hometown: String,
    pointsPerGame: String,
    assistPerGame: String,
    reboundsPerPage: String,
    stealsPerGame: String,
    blocksPerGame: String

})

const Player = mongoose.model("Player", playerSchema)

module.exports = Player