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
