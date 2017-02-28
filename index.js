var common = require('./common/index.js');
var videoAPI = require('./aws/video.js');
var stripeCharge = require('./purchase/purchase.js');
var express = require('express');

var app = express();

/* APP SETUP */
app.use(common.setHeaders);

/* Routes */
app.post('/stripeBuy', stripeCharge);
app.post('/getVideo', videoAPI);
app.get('/', common.gethandler)

// Listen on port 80
app.listen(80, function(){
  console.log('Server running on port 80/');
});
