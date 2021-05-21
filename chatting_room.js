//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyCcbR6rUbFXQtum_P8nxq2M2tBh3-Am0X8",
    authDomain: "kwitter-7b7d9.firebaseapp.com",
    databaseURL: "https://kwitter-7b7d9-default-rtdb.firebaseio.com",
    projectId: "kwitter-7b7d9",
    storageBucket: "kwitter-7b7d9.appspot.com",
    messagingSenderId: "147173135293",
    appId: "1:147173135293:web:aa68fbaa5a675b9b26f8d4",
    measurementId: "G-SLYMLGVHX0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";

function addRoom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room_name"

    });
    localStorage.setItem("room_name",room_name);

    
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
     
    //Start code
    console.log("room_name-" +Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML+=row;
    //End code
    });});}
    
getData();
function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="chatting_page.html";

}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name"); 
    window.location="main_screen.index.html";
}