var firebase = require('../firebase/index.js');

// Make a charge to a card using the stripe API using data from payment form
module.exports = function(req, res, next){
  var response = '';
  var body = '';

  req.on('data', function(data){
    body += data;
  });
  
  req.on('end', function(){
    var request = JSON.parse(body);
    var courses = request.courses;
    var user = request.user;

    courses.forEach(course => {
        firebase.enrollUser(user, course);
    });

    var response = 'Success';

    res.writeHead(200, {'Content-Type': 'text/json'});
    res.write(response);
    res.end();
  });
}
