let mongoose = require("mongoose");
let Schema = new mongoose.Schema({
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
});

Schema.pre('findById', autoPopulate)
Schema.pre('find', autoPopulate)

module.exports = mongoose.model("Comments", Schema);

function autoPopulate(next) {
  this.populate('author');
  next();
}