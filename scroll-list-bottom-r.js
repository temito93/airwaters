listFOUR = document.getElementById("listFOUR");

var myScrollFuncfour = function() {
  var y = window.scrollY;
  if (y >= 750) {
    listFOUR.className = "list-four show-box-r-bottom"
  } else {
    listFOUR.className = "list-four hide-box-r-bottom"
  }
};

window.addEventListener("scroll", myScrollFuncfour);