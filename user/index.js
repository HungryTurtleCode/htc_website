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
