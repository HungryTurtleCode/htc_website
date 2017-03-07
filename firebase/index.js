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
