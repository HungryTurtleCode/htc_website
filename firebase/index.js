var firebase = require('firebase-admin');

var serviceAccount = require("../firebase-admin-key/admin-keys.json");

var config = {
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://hungry-turtle-code.firebaseio.com",
    databaseAuthVariableOverride: {
        uid: "node-server"
    }
};
firebase.initializeApp(config);

var database = firebase.database();
var ref = database.ref();

exports.enrollUser = function(user, courses){
    return new Promise((resolve, reject) => {
        var count = 0;

        courses.forEach((course, index) => {
            getCourseMeta(course)
                .then(data => {
                   setUserEnrolled(user, course);
                   addCourseToUserProfile(user, data);
                   count++;

                   if(courses.length === count){
                       resolve(true);
                   }
                });
        });
    });
}

exports.clearCart = function(user){
    return ref.child('users')
        .child(user)
        .child('cart')
        .set(null);
}

exports.getMetaForCourses = function(courses){
    var count = 0;
    var arr = [];

    return new Promise((resolve, reject) => {
        courses.forEach(course => {
                getCourseMeta(course)
                    .then(data => {
                        arr.push(data);
                        count++;
                        if(count === courses.length){
                            resolve(arr)
                        }
                    });
        });
    });
}

exports.getCommentOwner = function(loc, comment){
    return ref.child('comments')
            .child(loc)
            .child(comment)
            .child('user_id')
            .once('value')
            .then(snap => snap.val());
}

exports.setCommentNotification = function(owners, replyLoc, lesson){
    getSingleComment(replyLoc)
        .then(comment => {
            owners.forEach(owner => {
                if(owner !== comment.user_id){
                    var commentReplies = ref.child('users').child(owner).child('notifications');

                    var newReply = commentReplies.push();
                    
                    comment.notification_type = 'comment_reply';
                    var slug = replyLoc.split('/').splice(0, 2);
                    if(lesson){
                        slug.unshift('lessons/#!');
                    }
                    var page_name = slug[slug.length - 1];
                    slug.unshift('');
                    comment.location = slug.join('/');
                    comment.page_name = page_name.split('-').join(' ');
                    comment.notif_id = newReply.key;

                    newReply.set(comment);
                }
            })
        });
}

function getSingleComment(loc){
    return ref.child('comments') 
        .child(loc)
        .once('value')
        .then(snap => snap.val());
}

function addCourseToUserProfile(user, courseData){
    return ref.child('users')
        .child(user)
        .child('courses')
        .child(courseData.course)
        .set(courseData);
}

function setUserEnrolled(user, course){
    return ref.child('users')
        .child(user)
        .child('enrolled')
        .child(course)
        .set(true);
}

function getCourseMeta(course){
    return ref.child('courses')
        .child(course)
        .child('meta/course-meta-data')
        .once('value')
        .then(snap => {
            return snap.val();
        });
}
