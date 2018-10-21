// add support for jquery
var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);


// opening the default tabs
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
// Get the element with id="verticalDefaultOpen" and click on it
document.getElementById("verticalDefaultOpen").click();


// for opening the main tabs
function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}


// for opening the company tabs in "my companies"
function openVerticalTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("verticaltabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("companytabs");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}


// for deleting companies from dashboard
// button from row to be deleted
var toBeDeleted;

// ask for confirmation to delete
function confirmDelete(btn) {
  toBeDeleted = btn;
  document.getElementById("confirmmodal").style.display = "block";
}

// delete row from table
function deleteRow(btn) {
  var row = btn.parentNode.parentNode;
  $("#" + row.id).fadeOut("slow", function() {
    row.parentNode.removeChild(row);
  } );
}

// get variables
var confirmModal = document.getElementById("confirmmodal");
var deleteButton = document.getElementById("confirmdelete");
var cancelButton = document.getElementById("canceldelete");

// when the user confirms deletion, close the modal and delete the row
deleteButton.onclick = function() {
  deleteRow(toBeDeleted);
  confirmModal.style.display = "none";
}

// when the user clicks cancel, close the modal
cancelButton.onclick = function() {
  confirmModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == confirmModal) {
        confirmModal.style.display = "none";
    }
}


// for the accordion of options on "commonapp" page
// sets up the accordion for commonapp page
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    if(!this.classList.contains("activeaccordion")){
      for (i = 0; i < acc.length; i++) {
        acc[i].classList.remove("activeaccordion");
        acc[i].nextElementSibling.style.maxHeight = null;
      }
    }
    this.classList.toggle("activeaccordion");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// modal for adding job experience
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal (the X)
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}


// creates the html div class to display a job
function makeJob(jobTitle, employer, startDate, endDate) {
  var title = document.getElementById(jobTitle).value;  // add job title
  var b = document.createElement("b");
  b.appendChild(document.createTextNode(title));
  var p = document.createElement("p");
  p.appendChild(b);
  var div = document.createElement("div");
  div.appendChild(p);
  var emp = document.getElementById(employer).value;  // add employer
  p = document.createElement("p");
  p.appendChild(document.createTextNode(emp));
  div.appendChild(p);
  var sd = document.getElementById(startDate).value;  // add start date
  p = document.createElement("p");
  p.appendChild(document.createTextNode(sd));
  div.appendChild(p);
  var ed = document.getElementById(endDate).value;    // add end date
  p = document.createElement("p");
  p.appendChild(document.createTextNode(ed));
  div.appendChild(p);
  div.className = "jobcontent";
  document.getElementById("jobs").innerHTML += div.outerHTML; // update html
  document.getElementById("experience").click();  // refresh page
  document.getElementById("experience").click();
  modal.style.display = 'none'; // close modal
}


// for selecting and adding companies on "search companies" page
// if select all checkmark is checked/unchecked
function selectAll() {
  var checkboxes = document.getElementsByName("check");
  if (document.getElementById("selectall").checked) { // select all
    for (i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = true;
    }
  } else {  // deselect all
    for (i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = false;
    }
  }
}

// if a checkbox is unchecked, the selectall checkbox should also be unchecked
function checkSelect(checkbox) {
  if (!checkbox.checked) {
    document.getElementById("selectall").checked = false;
  }
}
