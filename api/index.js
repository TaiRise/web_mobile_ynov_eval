let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let cors = require('cors');

let authController = require('./controllers/auth-controller');

let usersRoutes = require('./routes/users-routes');
let newsRoutes = require('./routes/news-routes');
let commentsRoutes = require('./routes/comments-routes');

let auth = require('./utils/validate-token');

let app = express();

let swag = require('express-swagger-generator')(app);
let options = require('./swagger');
swag(options)

const {
  database
} = require('./config/conf');

mongoose.connect(database, {
  useNewUrlParser: true
});

app.use(cors());

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.post('/authentication', authController);

app.use('/api/users', usersRoutes);
app.use('/api/comments', auth, commentsRoutes);
app.use('/api/news', auth, newsRoutes);

app.route('/').get((req, res) => res.json('WEB API'));

app.listen(8888);

console.log('Server run');

module.exports = app;