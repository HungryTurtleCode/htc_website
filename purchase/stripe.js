//stripe
var stripe = require('stripe')('sk_test_3re9XAKYjEJeBdAdrcMpjS0Y');

exports.payment = function(token, courses){
    var totalPriceCents = 0;
    var description = '';

    courses.forEach(course => {
        totalPriceCents += course.price * 100;    
        description += course.desc + ', ';
    });

    return new Promise((resolve, reject) => {
        // create stripe charge
        var charge = stripe.charges.create({
            amount: totalPriceCents,
            currency: "usd",
            source: token,
            description: description
        }, function(err, charge){
            if(err){
                reject(err);
            }else{
                resolve(charge);
            }
        });
    });


}
