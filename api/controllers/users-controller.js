let users = require('../models/users');
let sha1 = require('../utils/sha1');

// GET /
exports.getAllUsers = (req, res) => users.find({}, (err, data) => res.json(extractData(err, data)));

// GET /:id
exports.getUserById = (req, res) => users.findById(req.params.id, (err, data) => res.json(extractData(err, data)));

// POST /
exports.createUser = (req, res) => {
  let obj = new users(req.body);
  let regexp = /^.*(?=.*[a-zA-Z])(?=.*\d)(?=.*[^\da-zA-Z]){6,}.*$/;
  if (regexp.test(obj.password)) {
    obj.password = sha1(obj.password);
    obj.save((err, data) => res.json(extractData(err, data)));
  } else {
    res.status(400).json({
      success: false,
      message: 'Password Failed'
    });
  }
}

// PUT /:id
exports.updateUser = (req, res) => users.findByIdAndUpdate(req.params.id, req.body, {
  new: true
}, (err, data) => res.json(extractData(err, data)));

// DELETE /:id
exports.deleteUser = (req, res) => {
  users.remove({
    _id: req.params.id
  }, (err, data) => {
    if (err)
      res.json(err);
    res.json({
      'message': 'User Succesfully Deleled'
    });
  })
}

function extractData(err, data) {
  if (err)
    return err
  return data
}