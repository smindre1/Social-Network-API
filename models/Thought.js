const { Schema, model } = require("mongoose");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [{
        type: Schema.Types.ObjectId,
        ref: 'Reaction',
    }]
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

const Thought = model('thought', thoughtSchema);

module.exports = Thought;