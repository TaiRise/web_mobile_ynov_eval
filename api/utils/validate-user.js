let users = require('../models/users');
let jwt = require('jsonwebtoken');
let {
  key
} = require('../config/conf');

exports.isAdmin = (req, res, next) => {
  let {
    admin
  } = req.user;
  if (admin) {
    console.log('User is admin');
    next();
  } else {
    res.status(403).json({
      status: "error",
      message: "Admin Required"
    });
  }
}

exports.isCurrentUser = (req, res, next) => {
  let {
    id
  } = req.user;
  users.findById(req.params.id, (err, data) => {
    if (id == data._id) {
      console.log('User matched');
      next();
    } else {
      res.status(403).json({
        status: "error",
        message: "It's not YOU"
      });
    }
  });
}