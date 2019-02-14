let mongoose = require("mongoose");
let Schema = new mongoose.Schema({
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
}, {
  toJSON: {
    virtuals: true
  },
  toObject: {
    virtuals: true
  }
});

Schema.virtual('comments', {
  ref: 'Comments',
  localField: '_id',
  foreignField: 'new'
})

Schema.pre('findOne', autoPopulateComments)
Schema.pre('find', autoPopulateComments)

module.exports = mongoose.model("News", Schema);

function autoPopulateComments(next) {
  this.populate('comments').populate('author');
  next();
}