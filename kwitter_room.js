
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBPBYWp9HzY3RHdZi5PUvrPD3zpzTNAk6E",
      authDomain: "kwitter-d1ae0.firebaseapp.com",
      databaseURL: "https://kwitter-d1ae0-default-rtdb.firebaseio.com",
      projectId: "kwitter-d1ae0",
      storageBucket: "kwitter-d1ae0.appspot.com",
      messagingSenderId: "54458317450",
      appId: "1:54458317450:web:aaab2a9d5754f3a552cb73"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
