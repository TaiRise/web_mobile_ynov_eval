let comments = require('../models/comments');


// POST /
exports.createComment = (req, res) => {
  let obj = new comments(req.body);
  obj.save((err, data) => res.json(extractData(err, data)));
}

// PUT /:id
exports.updateComment = (req, res) => comments.findByIdAndUpdate(req.params.id, req.body, {
  new: true
}, (err, data) => res.json(extractData(err, data)));

// DELETE /:id
exports.deleteComment = (req, res) => {
  comments.remove({
    _id: req.params.id
  }, (err, data) => {
    if (err)
      res.json(err);
    res.json({
      'message': 'Comment Succesfully Deleled'
    });
  })
}

function extractData(err, data) {
  if (err)
    return err
  return data
}