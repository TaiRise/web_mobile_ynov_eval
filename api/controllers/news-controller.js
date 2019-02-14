let news = require('../models/news');

// GET /
exports.getAllNews = (req, res) => news.find({}, (err, data) => res.json(extractData(err, data)));

// GET /:id
exports.getNewById = (req, res) => news.findById(req.params.id, (err, data) => res.json(extractData(err, data)));

// POST /
exports.createNew = (req, res) => {
  let obj = new news(req.body);
  obj.save((err, data) => res.json(extractData(err, data)));
}

// PUT /:id
exports.updateNew = (req, res) => news.findByIdAndUpdate(req.params.id, req.body, {
  new: true
}, (err, data) => res.json(extractData(err, data)));

// DELETE /:id
exports.deleteNew = (req, res) => {
  news.remove({
    _id: req.params.id
  }, (err, data) => {
    if (err)
      res.json(err);
    res.json({
      'message': 'New Succesfully Deleled'
    });
  })
}

function extractData(err, data) {
  if (err)
    return err
  return data
}