let jwt = require('jsonwebtoken');
let {
  key
} = require('../config/conf');

module.exports = (req, res, next) => {
  if (req.headers['authorization']) {
    let token = req.headers['authorization'].split(" ")[1] || req.headers['x-access-token'];
    if (token) {
      jwt.verify(token, key, (err, decoded) => {
        if (err) {
          res.status(401).json({
            status: "error",
            message: err.message
          });
        } else {
          console.log(decoded);
          req['user'] = decoded;
          next();
        }
      });
    } else {
      res.status(401).json({
        status: "error",
        message: "token required"
      });
    }
  } else {
    res.status(401).json({
      status: "error",
      message: "token required"
    });
  }
}