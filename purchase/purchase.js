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
