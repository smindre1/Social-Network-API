const { Schema, model } = require("mongoose");
const dateFormat = require('../utils/dateFormat')

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
        get: timestamp => dateFormat(timestamp),
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

const Thought = model('thought', thoughtSchema);

module.exports = Thought;