const { Thought, User, Reaction } = require('../models');

module.exports = {
//get all thoughts

//get a single thought by _id

//post a new thought (and update the user's thought array with the new thought _id)
//The json body should look like:
/*
{
  "thoughtText": "I wonder what lives at the bottom of the deepest ocean.",
  "username": "chucky",
  "userId": "5aacg588a0kls299aa4f300s"
}
*/

//put to update a thought by its _id

//delete a thought by its _id (and remove from associated user's thought array)

//===========

//(/api/thoughts/:thoughtId/reactions)

//post to create a reacction stored in a single thoughts reactions array field

//delete to pull and remove a reaction by the reacction's reactionId value

};