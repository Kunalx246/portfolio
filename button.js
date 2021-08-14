//Get the button
var toTop = document.getElementById("btn-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 20) {
    toTop.style.display = "block";
  } else {
    toTOp.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0;
}


//btn-bottom
var toBottom = document.getElementById("btn-to-bottom");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toBottom.style.display = "block";
  } else {
    toBottom.style.display = "none";
  }
}
function bottomFunction() {
  document.body.scrollTop = 2000;
  document.documentElement.scrollTop = 2000;
}