var ActiveCampaign = require("activecampaign");
var http = require('request');
var querystring = require('querystring');

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
                var response;
                if(result.success){
                    response = JSON.stringify({success: true});
                }else if(result.error.includes('You selected a list that does not allow duplicates')){
                    response = JSON.stringify({success: false, error: 'duplicate'});
                }else{
                    response = JSON.stringify({success: false});
                }
                res.writeHead(200, {'Content-Type': 'text/json'});
                res.write(response);
                res.end();
            }, function(err){
                console.log(err);
                var response = JSON.stringify({error: 'Something went wrong', success: false});

                res.writeHead(500, {'Content-Type': 'text/json'});
                res.write(response);
                res.end();
            });
    });
}

exports.addTag = function(email, tags){
    tags = tags.forEach(tag => {
        tag = '[Course] ' + tag;
        let data = {
            email,
            tags: tag
        }

        ac.api('contact/tag_add', data)
            .then(function(result){
                console.log(result);
            }, function(err){
                console.log(err);
            });
    });
}

exports.trackEvent = function(req, res, next){
    var response = '';
    var body = '';

    req.on('data', function(data){
        body += data;
    });

    // TODO add tags according to the event data here? Sun 30 Apr 2017 12:32:45 AM UTC
  
    req.on('end', function(){
        var request = JSON.parse(body);
        console.log(request);
        request.actid = '609631196';
        request.key = 'da1cfc2fa8a8ab68b6e5a635eea91ed966d9477b';
            
        http({
            url: 'https://trackcmp.net/event',
            method: 'POST',
            json: true,
            body: querystring.stringify(request),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }, function(error, response, body){
            console.log(response);
        });

    });
}
