listTHREE = document.getElementById("listTHREE");

var myScrollFuncfive = function() {
  var y = window.scrollY;
  if (y >= 450) {
    listTHREE.className = "list-three show-box-l-bottom"
  } else {
    listTHREE.className = "list-three hide-box-l-bottom"
  }
};

window.addEventListener("scroll", myScrollFuncfive);