var firebase = require('../firebase/index.js');

exports.commentNotification = function(req, res, next){
    var response = '';
    var body = '';

    req.on('data', function(data){
        body += data;
    });
  
    req.on('end', function(){
        var request = JSON.parse(body);
        var loc = request.loc;
        var replyChain = request.replyChain;
        var replyKey = request.replyKey;
        var lesson = request.lesson;

        var ownersSet = new Set();
        var count = 0;

        replyChain.forEach((reply, index) => {
            if(index > 0){
                loc = loc + replyChain[index - 1] + '/replies/';
            }

            firebase.getCommentOwner(loc, reply)
                .then(owner => {
                    ownersSet.add(owner);
                    count++;

                    if(count === replyChain.length){
                        var newReplyLoc = loc + reply + '/replies/' + replyKey;
                        var ownersArr = Array.from(ownersSet);
                        firebase.setCommentNotification(ownersArr, newReplyLoc, lesson);
                    }
                });
        });
        
        var response = JSON.stringify({success: true});

        res.writeHead(200, {'Content-Type': 'text/json'});
        res.write(response);
        res.end();
    });
}
exports.migrate = function(req, res, next){
    var response = '';
    var body = '';

    req.on('data', function(data){
        body += data;
    });

    req.on('end', function(){
        var request = JSON.parse(body);
        var to_user = request.to_user;
        var from_user = request.from_user;

        firebase.getUserData(from_user)
            .then(from_data => {
                from_data = from_data || {};

                firebase.getUserData(to_user)
                    .then(to_data => {
                        to_data = to_data || {};
                        var newData = Object.assign(from_data, to_data);

                        firebase.setUserData(to_user, newData)
                            .then(() => {
                                firebase.setUserData(from_user, null)
                                    .then(() => {
                                        var response = JSON.stringify({success: true});

                                        res.writeHead(200, {'Content-Type': 'text/json'});
                                        res.write(response);
                                        res.end();
                                    });
                            });
                    });
            });
    });
}
