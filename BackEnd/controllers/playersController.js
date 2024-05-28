const Player = require("../models/player");

const fetchAllPlayers = async (req, res) => {
  // 1. Get all Players from DB
  // 2. Send the players back as a response
  const players = await Player.find();
  // --------------------------------(1)
  res.json({ players: players }); 
  // --------------------------------(2)
};

const fetchPlayer = async (req, res) => {
  // 1. Get id off the url
  // 2. Find the player assoc. w/ ID
  // 3.Send response with that player as the payload

  const playerId = req.params.id;
  // --------------------------------(1)
  const player = await Player.findById(playerId);
  // --------------------------------(2)
  res.json({ player: player });
  // --------------------------------(3)
};

const createPlayer = async (req, res) => {
  // 1. Get data from req.body
  // 2.Create Player
  // 3. Respond with new copy of Player
  console.log(`BODY: ${req.body}`);
  const name = req.body.name;
  const position = req.body.position;
  const hometown = req.body.hometown;
  // const {name,position,hometown} = req.body
  // --------------------------------(1)
  const player = await Player.create({
    name: name,
    position: position,
    hometown: hometown
  });
  // --------------------------------(2)
  res.json({ player: player });
  // --------------------------------(3)
};

const updatePlayer = async (req, res) => {
  // 1. Get id off the url
  // 2. Get the data off the id
  // 3. Find and Update player
  // 4. Retrieve updatedPlayer and send it as a response
  const PlayerId = req.params.id;
  // --------------------------------(1)
  const { name, position, hometown } = req.body;
  // --------------------------------(2)
  const player = await Playerlayer.findByIdAndUpdate(playerId, {
    name: name,
    position: position,
    hometown: hometown
  });
  // --------------------------------(2)
  const updatedPlayer = await Player.findById(playerId);
  res.json({ player: updatedPlayer });
};

const deletePlayer = async(req, res) => {
    // 1. Get the id off the url
    // 2. Delete the record
    // 3. Send Response
    const PlayerId = req.params.id
  // --------------------------------(1)
  await Player.deleteOne({
     _id: PlayerId 
    })
    // --------------------------------(2)
  res.json({success: "Player has been deleted successfully"})
}

module.exports = {
    fetchAllPlayers,
    fetchPlayer,
    createPlayer,
    updatePlayer,
    deletePlayer
}