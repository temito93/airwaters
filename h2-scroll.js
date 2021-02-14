myIDtwo = document.getElementById("myIDtwo");

var myScrollFuncTwo = function() {
  var y = window.scrollY;
  if (y >= 230) {
    myIDtwo.className = "sec-one-h2-div show-b"
  } else {
    myIDtwo.className = "sec-one-h2-div hide-b"
  }
};

window.addEventListener("scroll", myScrollFuncTwo);