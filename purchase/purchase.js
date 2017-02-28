// courses
var firebase = require('firebase');
var express = require('express');

var app = express();

/* APP SETUP */
app.use(setHeaders);

/* Routes */
app.post('/stripeBuy', stripeCharge);
app.get('/', gethandler)

// Listen on port 80
app.listen(80, function(){
  console.log('Server running on port 80/');
});

/* Implementations */

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCYYCrku-CpvJ56JyNfZJtXqlmbZnwEPpo",
  authDomain: "hungry-turtle-code.firebaseapp.com",
  databaseURL: "https://hungry-turtle-code.firebaseio.com",
  storageBucket: "hungry-turtle-code.appspot.com",
  messagingSenderId: "945246952572"
};
firebase.initializeApp(config);

function gethandler(req, res, next){
  var response = '';
  var body = '';

  req.on('data', function(data){
    body += data;
  });
  
  req.on('end', function(){
    res.end();
  });
}

function setHeaders(req, res, next){
  // Website you wish to allow to connect
  
  if(req.get('origin') === 'http://localhost:4000' || req.get('origin') === 'https://hungryturtlecode.com'){
    res.setHeader('Access-Control-Allow-Origin', req.get('origin'));
  }
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  if(req.method === 'OPTIONS'){
    res.sendStatus(200);
  }else{
    next();
  }
}

// Make a charge to a card using the stripe API using data from payment form
function stripeCharge(req, res, next){
  var response = '';
  var body = '';

  req.on('data', function(data){
    body += data;
  });
  
  req.on('end', function(){
    var request = JSON.parse(body);
    var data = request.data;
    var user = request.user;
    console.log(data);
    console.log(user);

    // if(checkUserCanViewVideo(request.user)){
    //   var url = getSignedUrl(request.video);

    //   var response = {
    //     url: url
    //   }
    //   console.log(response);

    //   res.writeHead(200, {'Content-Type': 'text/json'});
    //   res.write(JSON.stringify(response));
    //   res.end();
    // }
  });
}
