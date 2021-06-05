var firebaseConfig = {
    apiKey: "AIzaSyDxpwmsGkI0u05Wj_-XrczTlkcZ3Fxd1Jk",
    authDomain: "kwitter-c8981.firebaseapp.com",
    databaseURL: "https://kwitter-c8981-default-rtdb.firebaseio.com",
    projectId: "kwitter-c8981",
    storageBucket: "kwitter-c8981.appspot.com",
    messagingSenderId: "578707568009",
    appId: "1:578707568009:web:e636fa834ba113cb96dd58",
    measurementId: "G-HB0NGKTHPZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function add_user(){
    var user_name = document.getElementById("user_name").value;
    var city_name = document.getElementById("city_name").value;
    var Hobbies = document.getElementById("Hobbies").value;
    var Food = document.getElementById("Favourite_Food").value;
    var Color = document.getElementById("Favourite_color").value;
    var Holiday = document.getElementById("holiday_destination").value;
    var Sport = document.getElementById("Sport").value;
    var Contact = document.getElementById("Contact").value;
    firebase.database().ref("/").child(user_name).update({
        purpurse : "adding_value"
    });

    firebase.database().ref(user_name).child("Details").update({
        City : city_name
    });
    firebase.database().ref(user_name).child("Details").update({
        Hobbies : Hobbies
    });
    firebase.database().ref(user_name).child("Details").update({
        Food : Food
    });
    firebase.database().ref(user_name).child("Details").update({
        Color : Color
    });
    firebase.database().ref(user_name).child("Details").update({
        Holiday : Holiday
    });
    firebase.database().ref(user_name).child("Details").update({
        Sport : Sport
    });
    firebase.database().ref(user_name).child("Details").update({
        Contact : Contact
    });
}