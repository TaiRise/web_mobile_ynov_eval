let mongoose = require("mongoose");
let Schema = mongoose.Schema;

module.exports = mongoose.model(
  "Comments",
  new Schema({
    new: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: 'News'
    },
    title: {
      type: String,
      required: "Title required"
    },
    content: {
      type: String,
      required: "Content required"
    },
    createAt: {
      type: Date,
      default: Date.now()
    },
    author: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: 'Users'
    }
  })
);