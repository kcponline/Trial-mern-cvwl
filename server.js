// Include Server Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

//Require Click Schema
var Click = require('./models/click.js');

// Create Instance of Express
var app = express();
var PORT = process.env.PORT || 3000; // Sets an initial port. We'll use this later in our listener

// Run Morgan for Logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('./public'));

// -------------------------------------------------

// MongoDB Configuration configuration (Change this URL to your own DB)
mongoose.connect('mongodb://localhost');
// mongoose.connect('mongodb://admin:codingrocks@ds023674.mlab.com:23674/heroku_5ql1blnl');
// mongoose.connect('mongodb://kcponlinetcbc:pa55w0rd@ds111748.mlab.com:11748/heroku_swngn3v4');
// mongoose.connect('mongodb://heroku_swngn3v4:78qdg5fdbsp3cnf4hu738jl1o7@ds111748.mlab.com:11748/heroku_swngn3v4');

var db = mongoose.connection;

db.on('error', function (err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function () {
  console.log('Mongoose connection successful.');
});


// -------------------------------------------------

// Main Route. This route will redirect to our rendered React application
app.get('/', function(req, res){
  res.sendFile('./public/index.html');
})

// Main Route. This route will redirect to our rendered React application
app.get('/index2', function(req, res){
  res.sendFile('./public/index2.html');
})

// This is the route we will send GET requests to retrieve our most recent click data.
// We will call this route the moment our page gets rendered
app.get('/api/', function(req, res) {

  // This GET request will search for the latest clickCount
  Click.find({})
    .exec(function(err, doc){

      if(err){
        console.log(err);
      }
      else {
        res.send(doc);
      }
    })
});

// This is the route we will send POST requests to save each click.
// We will call this route the moment the "click" or "reset" button is pressed.
app.post('/api/', function(req, res){
  var newClick = new Click(req.body);
  console.log(req.body);

  var clickID = req.body.clickID;
  var clicks = parseInt(req.body.clicks);

  // Note how this route utilizes the findOneAndUpdate function to update the clickCount.
  Click.findOneAndUpdate({"clickID": clickID}, {$set: {"clicks": clicks}}, {upsert: true}).exec(function(err){

    if(err){
      console.log(err);
    }

    else{
        res.send("Updated Click Count!");
    }
  });

});

// We handle posts to our mongodb database here
app.post('/submit', function(req, res) {

  // Inserting an array and a boolean into the req.body object for example purposes
  req.body.array = ["item1", "item2", "item3"];
  // remember, we have to specify booleans on the server--the front-end can only send strings
  req.body.boolean = false;

  // We use the "Example" class we defined above 
  // to check our req.body against our Example model.
  var content = new Example(req.body);

  // with the new Example object created, we can save our data to mongoose.
  // notice the different syntax. The magic happens in exampleModel.js
  content.save(function(err, doc) {
    // send any errors to the browser
    if (err) {
      res.send(err);
    } 
    // otherwise, send the new doc to the browser
    else {
      res.send(doc);
    }
  });
});



// -------------------------------------------------

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
