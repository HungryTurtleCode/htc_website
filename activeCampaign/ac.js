var ActiveCampaign = require("activecampaign");

var ac = new ActiveCampaign("https://hungryturtlecode.api-us1.com", '6bd9af1ad10d83d8b383e7403a88eec8b29b2245e70da1244ef2dac6c5f595c8ab36a254');

exports.subscribe = function(req, res, next){
    var response = '';
    var body = '';

    req.on('data', function(data){
        body += data;
    });
  
    req.on('end', function(){
        var request = JSON.parse(body);

        var contact = {
            first_name: request.first_name,
            last_name: request.last_name,
            email: request.email,
            'p[3]': 3, // site members list
            'field[1,0]': true //yes to receive newsletter
        };

        ac.api('contact/add', contact)
            .then(function(result){
                console.log(result);
                if(result.success){
                    var response = JSON.stringify({success: true});

                    res.writeHead(200, {'Content-Type': 'text/json'});
                    res.write(response);
                    res.end();
                }
            }, function(err){
                console.log(err);
                var response = JSON.stringify({error: 'Something went wrong', success: false});

                res.writeHead(500, {'Content-Type': 'text/json'});
                res.write(response);
                res.end();
            });
    });
}
