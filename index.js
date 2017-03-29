var common = require('./common/index.js');
var videoAPI = require('./aws/video.js');
var purchase = require('./purchase/purchase.js');
var contact = require('./contact/contact.js');
var activeCampaign = require('./activeCampaign/ac.js');
var user = require('./user/index.js');
var express = require('express');
var http = require('http');
var https = require('https');
var fs = require('fs');

var app = express();

/* SSL Setup */
var privateKey =  fs.readFileSync('/etc/letsencrypt/live/api.hungryturtlecode.com/privkey.pem')
var cert = fs.readFileSync('/etc/letsencrypt/live/api.hungryturtlecode.com/cert.pem');

var options = {
    key: privateKey,
    cert: cert
}


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
// app.listen(80, function(){
//   console.log('Server running on port 80/');
// });

// HTTP to HTTPS redirect
http.createServer((req, res) => {
    console.log('REDIRECTING ', req.url);
    res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
    res.end();
}).listen(80, () => console.log('running on port 80'));

// HTTPS server
https.createServer(options, app).listen(443, () => console.log('Secure SSL server running on port 443'));
