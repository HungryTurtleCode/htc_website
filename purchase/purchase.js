var firebase = require('../firebase/index.js');
var paypal = require('./paypal.js');
var stripe = require('./stripe.js');
var ac = require('../activeCampaign/ac.js');

var BASE_URL = 'http://localhost:4000';

// Make a charge to a card using the stripe API using data from payment form
exports.stripeCharge = function(req, res, next){
  var response = '';
  var body = '';

  req.on('data', function(data){
    body += data;
  });
  
  req.on('end', function(){
    var request = JSON.parse(body);
    var courses = request.courses;
    var user = request.user;
    var email = request.email;
    var token = request.token;

    firebase.getMetaForCourses(courses)
        .then(meta => {
            if(meta.length){
                stripe.payment(token, meta)
                    .then(charge => {
                        firebase.enrollUser(user, courses)
                            .then(() => {

                                ac.addTag(email, courses)

                                firebase.clearCart(user)
                                    .then(() => {
                                        var response = JSON.stringify({url: BASE_URL + '/account', success: true});

                                        res.writeHead(200, {'Content-Type': 'text/json'});
                                        res.write(response);
                                        res.end();
                                    });
                            });
                    })
                    .catch(err => {
                        console.log(err);
                        var response = JSON.stringify({error: 'Something Went Wrong', success: false});

                        res.writeHead(500, {'Content-Type': 'text/json'});
                        res.write(response);
                        res.end();
                    });
            }
        })

  });
}

// Make a charge to a card using the stripe API using data from payment form
exports.paypalCharge = function(req, res, next){
  var response = '';
  var body = '';

  req.on('data', function(data){
    body += data;
  });
  
  req.on('end', function(){
    var request = JSON.parse(body);
    var courses = request.courses;
    var user = request.user;

    firebase.getMetaForCourses(courses)
        .then(meta => {
            if(meta.length){
                paypal.createPayment(meta, user)
                    .then(url => {
                        var response = JSON.stringify({url: url, success: true});

                        res.writeHead(200, {'Content-Type': 'text/json'});
                        res.write(response);
                        res.end();
                    })
                    .catch(err => {
                        var response = JSON.stringify({error: err, success: false});

                        res.writeHead(500, {'Content-Type': 'text/json'});
                        res.write(response);
                        res.end();
                    });
            }
        });
  });
}

exports.paypalExecute = function(req, res, next){

    if(req.query.success){
        var courses = req.query.course;

        if(typeof req.query.course === 'string'){
            courses = [req.query.course];
        }

        paypal.execute(req.query.paymentId, req.query.PayerID)
            .then(data => {
                firebase.enrollUser(req.query.user, courses)
                    .then(() => {
                        firebase.clearCart(req.query.user)
                            .then(() => {
                                res.redirect(BASE_URL + '/account');
                            });
                    });

            });

    }else{
        var response = 'Fail';

        res.writeHead(200, {'Content-Type': 'text/json'});
        res.write(response);
        res.end();
    }


}
