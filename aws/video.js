var firebase = require('../firebase/index.js');
var cfsign = require('aws-cloudfront-sign');

module.exports = function(req, res, next){
  var response = '';
  var body = '';

  req.on('data', function(data){
    body += data;
  });
  
  req.on('end', function(){
    var request = JSON.parse(body);

    if(checkUserCanViewVideo(request.user)){
      var url = getSignedUrl(request.video);

      var response = {
        url: url
      }
      console.log(response);

      res.writeHead(200, {'Content-Type': 'text/json'});
      res.write(JSON.stringify(response));
      res.end();
    }
  });
}

function checkUserCanViewVideo(user){
  console.log(user);
  return true;
}

function getSignedUrl(file){
  var cloudfrontUrl = 'https://d2bm0q3174lbl0.cloudfront.net';

  var fileUrl = cloudfrontUrl + '/' + file;

  var expireInMinutes = 60;

  var currentTime = new Date().getTime();
  var expireTime = currentTime + expireInMinutes * 60 * 1000;

  var signingParams = {
    keypairId: 'APKAIWKJLWSYSQLVH77A',
    privateKeyPath: 'aws-key/pk-APKAIWKJLWSYSQLVH77A.pem',
    expireTime: expireTime
  }

  // Generating a signed URL
  var signedUrl = cfsign.getSignedUrl(
    fileUrl,
    signingParams
  );
  console.log(signedUrl);
  return signedUrl;
}
