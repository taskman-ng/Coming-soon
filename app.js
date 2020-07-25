var express = require ('express');
var path = require ('path');
var bodyParser = require ('body-parser');
var mongoose = require ('mongoose');

var connectDB = require ('./connection/db');

connectDB ();

var app = express ();

app.use (bodyParser.urlencoded ({extended: false}));
app.use (express.static (path.resolve (__dirname, 'public')));

var emailSchema = new mongoose.Schema ({
  email: String,
});

var User = mongoose.model ('users', emailSchema);

app.post ('/post-email', function (req, res) {
  var userEmail = new User ({
    email: req.body.Email,
  });
  userEmail
    .save ()
    .then (user => {
      res.sendFile (__dirname + '/public/successPage.html');
    })
    .catch (err => {
      res.status (400).send ('unable to save to database');
    });
});

app.listen (80, function () {
  console.log ('app has started');
});
