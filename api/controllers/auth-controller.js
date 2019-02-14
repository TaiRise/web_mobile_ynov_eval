let users = require('../models/users');
let sha1 = require('../utils/sha1');
let jwt = require('jsonwebtoken');
let {
  key
} = require('../config/conf');

module.exports = (req, res) => {
  const mail = req.body.login;
  const password = sha1(req.body.password);

  users.findOne({
    mail,
    password
  }, (err, data) => {
    if (data) {
      let token = jwt.sign({
        id: data._id,
        login: data.mail,
        admin: data.admin || false,
        status: data.status
      }, key, {
        expiresIn: 1440
      });
      res.json({
        success: true,
        message: 'Login OK',
        token
      });
    } else {
      res.status(401).json({
        success: false,
        message: 'Login / Password Invalid.'
      });
    }
  });
}