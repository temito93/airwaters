listSIX = document.getElementById("listSIX");

var myScrollFuncsix = function() {
  var y = window.scrollY;
  if (y >= 750) {
    listSIX.className = "list-six show-list-six"
  } else {
    listSIX.className = "list-six hide-list-six"
  }
};

window.addEventListener("scroll", myScrollFuncsix);