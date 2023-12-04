const connection = require("../config/connection");
const { User, Thought, Reaction } = require("../models");
const { fakeUsers, fakeThoughts } = require("./data");
// const { newThought } = require('../controllers/thoughtControllers')

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  // Drop existing models
  await User.deleteMany({});
  await Thought.deleteMany({});
  await Reaction.deleteMany({});

  // Add fake users and thoughts to the models and await the results
  const users = fakeUsers();
  await User.collection.insertMany(users);
  const thoughts = fakeThoughts();

  //This must be before the assignThoughts function is called because it is where the thought IDs are added
  await Thought.collection.insertMany(thoughts);

  await thoughts.forEach((thought) => {
    assignThoughts(thought)});

function assignThoughts (body) {
    return User.findOneAndUpdate({ username: body.username }, { $push: { thoughts: body._id } }, { runValidators: true, new: true });
  }

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
