//Get the button
var toTop = document.getElementById("btn-to-top");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0;
}


//btn-bottom
var toBottom = document.getElementById("btn-to-bottom");

function bottomFunction() {
  document.documentElement.scrollTop = 2000;
}
