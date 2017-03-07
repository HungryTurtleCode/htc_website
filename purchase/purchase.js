var firebase = require('../firebase/index.js');
var paypal = require('./paypal.js');

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

    firebase.enrollUser(user, courses)
        .then(() => {
            var response = 'Success';

            res.writeHead(200, {'Content-Type': 'text/json'});
            res.write(response);
            res.end();
        });

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
                            res.redirect('http://localhost:4000/account')
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
