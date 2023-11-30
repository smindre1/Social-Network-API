const router = require("express").Router();
const { getUsers, getSpecificUser, newUser, updateUser, deleteUser, newFriend, deleteFriend } = require("../../controllers/userControllers");

router.route("/").get(getUsers).post(newUser);

router.route("/:userId").get(getSpecificUser).put(updateUser).delete(deleteUser);

router.route("/:userId/friends/:friendId").post(newFriend).delete(deleteFriend);

module.exports = router;
