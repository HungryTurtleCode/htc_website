"use strict";
var paypal_api = require('paypal-rest-sdk');

var config_opts = {
    'host': 'api.sandbox.paypal.com',
    'port': '',
    'client_id': 'AQ6umz8EmrXDEl_xWr8woLkOHrwY5blowXLs_B98WdyO_GyOooNau_5G__Ma3NPTc1N8f7pYAtx9qQv1',
    'client_secret': 'EKVb-_J0Ua5jmn03_W-6jcXRxyZ90-A6aj4dxiTYMAMPmJRqm2nq5UrKrY-U4fd0W1K2wSPv36VBQObE'
};

exports.createPayment = function(courses, user){
    var transactions = [];
    var courseString = '';

    courses.forEach((course, index) => {
        courseString += 'course=' + course.course + '&';

        transactions.push(  {
                                "amount": {
                                    "currency": "USD",
                                    "total": course.price.toFixed(2)
                                },
                                "description": course.title
                            });
    });

    var create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http:\/\/138.197.119.94/paypal?success=true&"+courseString+'user='+user,
            "cancel_url": "http:\/\/138.197.119.94/paypal?success=false",
        },
        "transactions": transactions
    };


    return new Promise((resolve, reject) => {
        paypal_api.payment.create(create_payment_json, config_opts, function (err, res) {
            if (err) {
                throw err;
                reject(err);
            }
            if (res) {
                var redirectUrl;

                for(var i = 0; i < res.links.length; i++) {
                    var link = res.links[i];
                    if (link.method === 'REDIRECT') {
                        redirectUrl = link.href;
                    }
                }
                resolve(redirectUrl);
            }
        });
    });
}

exports.execute = function(paymentId, payerId){
    var details = {"payer_id": payerId};
    
    return new Promise((resolve, reject) => {
        paypal_api.payment.execute(paymentId, details, config_opts, (error, payment) => {
            if(error){
                console.log(error);
                reject(error);
            }else{
                resolve(payment)
            }
        });
    });
}


