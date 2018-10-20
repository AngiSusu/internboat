var messagesRef = new Firebase('https://internboat.firebaseio.com');

var messageField = document.getElementById('messageInput');

// Save data to firebase
function savedata(){
  var message = messageField.value;

  messagesRef.push({fieldName:'messageField', text:message});
  messageField.value = '';
}