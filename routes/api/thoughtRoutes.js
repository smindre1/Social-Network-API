const router = require('express').Router();
const {getThoughts, getSpecificThought, newThought, updateThought, deleteThought, newReaction, deleteReaction} = require('../../controllers/thoughtControllers');

router.route('/').get(getThoughts).post(newThought);

router.route('/:thoughtId').get(getSpecificThought).put(updateThought).delete(deleteThought);

router.route('/:thoughtId/reactions').post(newReaction).delete(deleteReaction);

module.exports = router;