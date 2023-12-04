const { User, Thought} = require("../models");

module.exports = {
  //get all users
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  //get a single user by its _id and populated thought and friend data
  getSpecificUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select("-__v")
      .then((user) => (!user ? res.status(404).json({ message: "No user with that ID" }) : res.json(user)))
      .catch((err) => res.status(500).json(err));
  },
  //post a new user with the following json:
  // {"username": "chucky48", "email": "hauntedChucky@gmail.com"}

  newUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  //put to update a user by _id
  updateUser(req, res) {
    User.findOneAndUpdate({ _id: req.params.userId }, { $set: req.body }, { runValidators: true, new: true })
      .then((user) => (!user ? res.status(404).json({ message: "No user with this id!" }) : res.json(user)))
      .catch((err) => res.status(500).json(err));
  },
  //delete a user by _id
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : // remove a user's associated thoughts when they are deleted
            Thought.deleteMany({ _id: { $in: user.thoughts } })
      )
      .then(() => res.json({ message: "Users and thoughts deleted!" }))
      .catch((err) => res.status(500).json(err));
  },

  //============================

  //(/api/users/:userId/friends/:friendId)

  //post to add a new friend to a user's friend list
  newFriend(req, res) {
    User.findOneAndUpdate({ _id: req.params.userId }, { $push: {friends: req.params.friendId} }, { runValidators: true, new: true })
      .then((user) => (!user ? res.status(404).json({ message: "No user with this id!" }) : res.json(user)))
      .catch((err) => res.status(500).json(err));
  },
  //delete to remove a friend from a user's friend list
  deleteFriend(req, res) {
    User.findOneAndUpdate({ _id: req.params.userId }, { $pull: {friends: req.params.friendId} }, { runValidators: true, new: true })
      .then((user) => (!user ? res.status(404).json({ message: "No user with this id!" }) : res.json({ message: "Friend removed!" })))
      .catch((err) => res.status(500).json(err));
  },
};
