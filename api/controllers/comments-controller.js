let comments = require('../models/comments');


// POST /
exports.createNew = (req, res) => {
  let obj = new news(req.body);
  obj.save((err, data) => res.json(extractData(err, data)));
}

// PUT /:id
exports.updateNew = (req, res) => comment.findByIdAndUpdate(req.params.id, req.body, {
  new: true
}, (err, data) => res.json(extractData(err, data)));

// DELETE /:id
exports.deleteNew = (req, res) => {
  comment.remove({
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