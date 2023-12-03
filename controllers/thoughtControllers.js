const { Thought, User, Reaction } = require("../models");

module.exports = {
  //get all thoughts
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  //get a single thought by _id
  getSpecificThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select("-__v")
      .then((thought) => (!thought ? res.status(404).json({ message: "No thought with that ID" }) : res.json(thought)))
      .catch((err) => res.status(500).json(err));
  },
  //post a new thought (and update the user's thought array with the new thought _id)
  //The json body should look like:
  /*{"thoughtText": "I wonder what lives at the bottom of the deepest ocean.",
  "username": "chucky",
  "userId": "5aacg588a0kls299aa4f300s"}*/
  newThought(req, res) {
    Thought.create(req.body)
      .then((thought) => {
        return User.findOneAndUpdate({ username: req.body.username }, { $addToSet: { thoughts: thought._id } }, { runValidators: true, new: true });
      })
      .then((data) => res.json(data))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  //put to update a thought by its _id
  updateThought(req, res) {
    Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $set: req.body }, { runValidators: true, new: true })
      .then((thought) => (!thought ? res.status(404).json({ message: "No thought with this id!" }) : res.json(thought)))
      .catch((err) => res.status(500).json(err));
  },

  //delete a thought by its _id (and remove from associated user's thought array)
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) => {
        // !thought
        //   ? res.status(404).json({ message: "No thought with that ID" })
        //   : // remove the thought from the user's thoughts array when the thought is deleted
           return User.findOneAndUpdate({ username: thought.username }, { $pull: { thoughts: thought._id } }, { runValidators: true, new: true })}
      )
      .then(() => res.json({ message: "Thought deleted and User updated!" }))
      .catch((err) => res.status(500).json(err));
  },

  //===========

  //(/api/thoughts/:thoughtId/reactions)

  //post to create a reaction stored in a single thoughts reactions array field
  newReaction(req, res) {
    Reaction.create(req.body)
      .then((reaction) => {
        return Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $push: { reactions: reaction.reactionId } }, { runValidators: true, new: true });
      })
      .then((data) => res.json(data))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  //delete to pull and remove a reaction by the reaction's reactionId value
  deleteReaction(req, res) {
    Reaction.findOneAndDelete({ reactionId: req.params.reactionId })
      .then((reaction) => {
        if (!reaction) {
          res.status(404).json({ message: "No reaction with that ID" });
        };
        // remove the reaction from the Thoughts' reaction array when the reaction is deleted
        return Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $pull: { reactions: req.params.reactionId } }, { runValidators: true, new: true });
      })
      .then(() => res.json({ message: "Reaction deleted and Thought updated!" }))
      .catch((err) => res.status(500).json(err));
  },
};
