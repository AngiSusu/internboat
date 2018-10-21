// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyACU_H1W-iUxGaNJ1NjR3o2opbQN64NoCI",
  authDomain: "internboat.firebaseapp.com",
  databaseURL: "https://internboat.firebaseio.com",
  projectId: "internboat",
  storageBucket: "internboat.appspot.com",
  messagingSenderId: "901214580272"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('users');

// Listen for form submit
document.getElementById('profile').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var fname = getInputVal('firstname');
  var lname = getInputVal('lastname');
  //var dob = getInputVal('dob');
  //var gender = getInputVal('gender');
  var phonenumber = getInputVal('phonenumber');
  var email = getInputVal('email');
  var country = getInputVal('country');
  var address = getInputVal('address');
  var city = getInputVal('city');
  var state = getInputVal('state');
  var zipcode = getInputVal('zipcode');

  // Save message
  saveMessage(fname, lname, phonenumber, email, country, address, city, state, zipcode);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('profile').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(fname, lname, phonenumber, email, country, address, city, state, zipcode){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    firstname:fname,
    lastname:lname,
    //dob:dob,
    //gender:gender,
    phonenumber:phonenumber,
    email:email,
    country:country,
    address:address,
    city:city,
    state:state,
    zipcode:zipcode
  });
}