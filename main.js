//Listen for form submit
document.getElementById('contactform').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

  //get values
  var fname = getInputVal('firstname');
  var lname = getInputVal('lastname');
  var dob = getInputVal('dob');
  var gender = getInputVal('firstname'); //this one is hard TODO
  var fname = getInputVal('firstname');
  var fname = getInputVal('firstname');
}

//function to get form values
functino getInputVal(id) {
  return document.getElementById(id);.value;
}