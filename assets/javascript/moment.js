  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCQ2TzgEfiRR0gAs0CHc6k_YZu5Xr7_HD0",
    authDomain: "trainscheduler-5042e.firebaseapp.com",
    databaseURL: "https://trainscheduler-5042e.firebaseio.com",
    projectId: "trainscheduler-5042e",
    storageBucket: "trainscheduler-5042e.appspot.com",
    messagingSenderId: "37362633769"
  };
  firebase.initializeApp(config);

//   assign the reference to the database
var database = firebase.database();

var currentTime = moment();

database.ref().on("child_added", function(childSnap) {

    var name = childSnap.val().name;
    var destination = childSnap.val().destination;
    var firstTrain = childSnap.val().firstTrain;
    var frequency = childSnap.val().frequency;
    var min = childSnap.val().min;
    var next = childSnap.val().next;

    $("#trainTable > tbody").append("<tr><td>" + name + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + next + "</td><td>" + min + "</td></tr>");
});

database.ref().on("value", function(snapshot) {
   

});
