listTWO = document.getElementById("listTWO");

var myScrollFuncfour = function() {
  var y = window.scrollY;
  if (y >= 500) {
    listTWO.className = "list-two show-box-r"
  } else {
    listTWO.className = "list-two hide-box-r"
  }
};

window.addEventListener("scroll", myScrollFuncfour);