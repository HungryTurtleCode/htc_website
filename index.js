var common = require('./common/index.js');
var videoAPI = require('./aws/video.js');
var purchase = require('./purchase/purchase.js');
var contact = require('./contact/contact.js');
var activeCampaign = require('./activeCampaign/ac.js');
var user = require('./user/index.js');
var express = require('express');

var app = express();

/* APP SETUP */
app.use(common.setHeaders);

/* Routes */
app.post('/stripeBuy', purchase.stripeCharge);
app.post('/acSubscribe', activeCampaign.subscribe);
app.post('/contact', contact);
app.post('/paypalBuy', purchase.paypalCharge);
app.post('/getVideo', videoAPI);
app.post('/commentNotif', user.commentNotification);
app.get('/paypal', purchase.paypalExecute);
app.get('/', common.gethandler)

// Listen on port 80
app.listen(80, function(){
  console.log('Server running on port 80/');
});
