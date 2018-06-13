  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCiPbLzx7TnPqPIT_PIDeXPJqRegbdOkww",
    authDomain: "classapp-b4cfe.firebaseapp.com",
    databaseURL: "https://classapp-b4cfe.firebaseio.com",
    projectId: "classapp-b4cfe",
    storageBucket: "",
    messagingSenderId: "815044328931"
  };
  firebase.initializeApp(config);

//   assign the reference to the database
var database = firebase.database();