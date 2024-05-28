const Coach = require("../models/coach");

const fetchAllCoaches = async (req, res) => {
  // 1. Get all Coaches from DB
  // 2. Send the coaches back as a response
  const coaches = await Coach.find();
  // --------------------------------(1)
  res.json({ coaches: coaches });
  // --------------------------------(2)
};

const fetchCoach = async (req, res) => {
  // 1. Get id off the url
  // 2. Find the coach assoc. w/ ID
  // 3.Send response with that coach as the payload

  const coachId = req.params.id;
  // --------------------------------(1)
  const coach = await Coach.findById(coachId);
  // --------------------------------(2)
  res.json({ coach: coach });
  // --------------------------------(3)
};

const createCoach = async (req, res) => {
  // 1. Get data from req.body
  // 2.Create coach
  // 3. Respond with new copy of Coach
  console.log(`BODY: ${req.body}`);
  const name = req.body.name;
  const hometown = req.body.hometown;
  const coaching_experience = req.body.coaching_experience;
  // const {name,hometown, coaching_experience} = req.body
  // --------------------------------(1)
  const coach = await Coach.create({
    name: name,
    hometown: hometown,
    coaching_experience: coaching_experience
  });
  // --------------------------------(2)
  res.json({ coach: coach });
  // --------------------------------(3)
};

const updateCoach = async (req, res) => {
  // 1. Get id off the url
  // 2. Get the data off the id
  // 3. Find and Update Coach
  // 4. Retrieve updatedCoach and send it as a response
  const coachId = req.params.id;
  // --------------------------------(1)
  const { name, hometown, coaching_experience } = req.body;
  // --------------------------------(2)
  const coach = await Coach.findByIdAndUpdate(coachId, {
    name: name,
    hometown: hometown,
    coaching_experience: coaching_experience
  });
  // --------------------------------(2)
  const updatedCoach = await Coach.findById(coachId);
  res.json({ coach: updatedCoach });
};

const deleteCoach = async(req, res) => {
    // 1. Get the id off the url
    // 2. Delete the record
    // 3. Send Response
    const coachId = req.params.id
  // --------------------------------(1)
  await Coach.deleteOne({
     _id: coachId 
    })
    // --------------------------------(2)
  res.json({success: "Coach has been deleted successfully"})
}

module.exports = {
    fetchAllCoaches,
    fetchCoach,
    createCoach,
    updateCoach,
    deleteCoach
}