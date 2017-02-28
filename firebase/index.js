var firebase = require('firebase');

var config = {
  apiKey: "AIzaSyCYYCrku-CpvJ56JyNfZJtXqlmbZnwEPpo",
  authDomain: "hungry-turtle-code.firebaseapp.com",
  databaseURL: "https://hungry-turtle-code.firebaseio.com",
  storageBucket: "hungry-turtle-code.appspot.com",
  messagingSenderId: "945246952572"
};
firebase.initializeApp(config);

var database = firebase.database();
var ref = database.ref();

exports.test = function(){
    console.log('hello test');
}

exports.enrollUser = function(user, course){
    getCourseMeta(course)
        .then(data => {
           setUserEnrolled(user, course);
           addCourseToUserProfile(user, data);
        });
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
