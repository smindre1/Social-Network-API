const { Schema, Types } = require("mongoose");

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      //The default is a new ObjectId
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

//Create a Getter method for 'createdAt' to format the timestamp on query
// 2022-02-26T16:37:48.244Z
// https://mongoosejs.com/docs/timestamps.html

const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;