require("dotenv").config();// -----> allows .env
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const connectToDb = require("./config/connectToDb.js");// Pulls Mongoose connection into application 
const cors = require("cors");// ---> Recieving reqs on cross-origins 
//----------------------------------------------------------------Requirements

const Player = require("./models/player");
const playersController = require("./controllers/playersController.js");
const Coach = require("./models/coach");
const coachesController = require("./controllers/coachesController.js");
const Comment = require("./models/comment");
const commentsController = require("./controllers/commentsController.js");
//Import the Models and their controller

connectToDb();// This initializes connectToDB() function
app.use(express.json());//Helps Express convert data to json
app.use(cors());
//-----------------------------------------------------------------MiddleWare


app.get("/", (req, res) => {
  res.send("This is a Landing Page");
});

//Establish CRUD routes for our Players Model
app.get("/players", playersController.fetchAllPlayers);
// -----------------> GET all Players - [Read]
app.get("/players/:id", playersController.fetchPlayer);
// -----------------> GET a Specific Player by ID - [Read]
app.post("/players", playersController.createPlayer);
// -----------------> Create a Player - [Create / POST]
app.put("/players/:id", playersController.updatePlayer);
// -----------------> Update a Specific Player - [Update]
app.delete("/players/:id", playersController.deletePlayer);
// -----------------> Delete a Specific Player - [Delete]
//-----------------------------------------------Player routes

//Establish CRUD routes for our Coaches Model
app.get("/coaches", coachesController.fetchAllCoaches);
// -----------------> GET all Coaches - [Read]
app.get("/coaches/:id", coachesController.fetchCoach);
// -----------------> GET a Specific Coach by ID - [Read]
app.post("/coaches", coachesController.createCoach);
// -----------------> Create a Coach - [Create / POST]
app.put("/coaches/:id", coachesController.updateCoach);
// -----------------> Update a Specific Coach - [Update]
app.delete("/coaches/:id", coachesController.deleteCoach);
// -----------------> Delete a Specific Coach - [Delete]
//-----------------------------------------------Coach routes

//Establish CRUD routes for our Comments Model
app.get("/comments", commentsController.fetchAllComments);
// -----------------> GET all Comments - [Read]
app.get("/comments/:id", commentsController.fetchComment);
// -----------------> GET a Specific Comment by ID - [Read]
app.post("/comments", commentsController.createComment);
// -----------------> Create a Comment - [Create / POST]
app.put("/comments/:id", commentsController.updateComment);
// -----------------> Update a Specific Comment - [Update]
app.delete("/comments/:id", commentsController.deleteComment);
// -----------------> Delete a Specific Comment - [Delete]
//-----------------------------------------------Comment routes
//-----------------------------------------------------------------Routing

app.listen(PORT, () => {
    console.log(`Express Server Listening on port num: ${PORT}`);
  });
  // --------------------------------------------------------------Server