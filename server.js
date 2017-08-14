// Include Server Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongo = require('mongodb').MongoClient;
var router = express.Router();

//Require Click Schema
var Click = require('./models/click.js');

// Create Instance of Express
var app = express();
var PORT = process.env.PORT || 3000; // Sets an initial port. We'll use this later in our listener

//Scraping tools (A CAUSE OF ERROR FOR NPM START)
//var request = require('request'); 
//var cheerio = require('cheerio');

// Run Morgan for Logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('./public'));

// -------------------------------------------------

// MongoDB Configuration configuration (Change this URL to your own DB)
mongo.connect('mongodb://localhost/Phones');
// mongoose.connect('mongodb://admin:codingrocks@ds023674.mlab.com:23674/heroku_5ql1blnl');
// mongoose.connect('mongodb://kcponlinetcbc:pa55w0rd@ds111748.mlab.com:11748/heroku_swngn3v4');
// mongoose.connect('mongodb://heroku_swngn3v4:78qdg5fdbsp3cnf4hu738jl1o7@ds111748.mlab.com:11748/heroku_swngn3v4');
//mongoose.connect('mongodb://localhost');

var db = mongo.connection;

db.on('error', function (err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function () {
  console.log('Mongoose connection successful.');
});



var Phones = require('./models/Phones.js');

app.get('/Numbers', function(req,res){
  var result = content;
  Phones.find({}, function(err, doc){
    // log any errors
    if (err){
      console.log(err);
    } 
    // or send the doc to the browser as a json object
    else {
      res.json(doc);
    }
  });
  // res.send(result);
});

// -------------------------------------------------

// Main Route. This route will redirect to our rendered React application
router.get('/', function(req, res){
  res.sendFile('./public/index.html');
})


//For getting data
router.get('/Numbers', function(req, res, next){
  var resultArray = [];
  var cursor = db.collection('Numbers').find();
  cursor.forEach(function(doc, err){
    resultArray.push(doc);
  }, function () {
    db.render('index', resultArray);
  });


});

//For inserting new data
// router.post('/insert', function(req, res, next){

// });

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

// Main Route. This route will redirect to our rendered React application
app.get('/templates', function(req, res){
  res.sendFile('./Components/Child.js');
})

// Main Route. This route will redirect to our rendered React application
app.get('/contacts', function(req, res){
  res.sendFile('./Components/Child2.js');
})

// -------------------------------------------------

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
