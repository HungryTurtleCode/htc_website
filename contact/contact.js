//contact
var sg = require('sendgrid')('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');
var helper = require('sendgrid').mail;

module.exports = function(req, res, next){
  var response = '';
  var body = '';

  req.on('data', function(data){
    body += data;
  });
  
  req.on('end', function(){
    var request = JSON.parse(body);

    console.log(request);

    sendEmail(
            request.email, 
            request.subject, 
            request.name, 
            request.message
        )
        .then(response => {
            var response = {
                success: true
            }

            res.writeHead(200, {'Content-Type': 'text/json'});
            res.write(JSON.stringify(response));
            res.end();
        })
        .catch(err => {
            console.log(err);
            var response = {
                success: false
            }

            res.writeHead(200, {'Content-Type': 'text/json'});
            res.write(JSON.stringify(response));
            res.end();
        });

  });
}

function sendEmail(from, subject, name, message){
    var mail = new helper.Mail();

    var from_email = new helper.Email(from, name);
    mail.setFrom(from_email);

    var personalisation = new helper.Personalization();
    var to_email = new helper.Email('adrian@hungryturtlecode.com');
    personalisation.addTo(to_email);
    mail.addPersonalization(personalisation);

    mail.setSubject('HTC Contact - ' + subject);

    var content = new helper.Content('text/html', '<div style="margin-bottom: 50px;">From: ' + name + '</div><div>' + message + '</div>');
    mail.addContent(content);

    var request = sg.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: mail.toJSON(),
    });

    return new Promise((resolve, reject) => {
        sg.API(request, function(error, response) {
            console.log(response.statusCode);
            console.log(response.body);
            console.log(response.headers);
            if(error){
                reject(error);
            }else{
                resolve(response)
            }
        });
    });
}
