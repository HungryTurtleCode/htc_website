exports.gethandler = function(req, res, next){
  var response = '';
  var body = '';

  req.on('data', function(data){
    body += data;
  });
  
  req.on('end', function(){
    res.end();
  });
}

exports.setHeaders = function(req, res, next){
  // Website you wish to allow to connect
  
  if(req.get('origin') === 'http://localhost:4000' || req.get('origin') === 'https://hungryturtlecode.com'){
    res.setHeader('Access-Control-Allow-Origin', req.get('origin'));
  }
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  if(req.method === 'OPTIONS'){
    res.sendStatus(200);
  }else{
    next();
  }
}
