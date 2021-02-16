myID = document.getElementById("myID");

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 230) {
    myID.className = "sec-one-h2 show-l"
  } else {
    myID.className = "sec-one-h2 hide-l"
  }
};

window.addEventListener("scroll", myScrollFunc);