listFIVE = document.getElementById("listFIVE");

var myScrollFuncfive = function() {
  var y = window.scrollY;
  if (y >= 750) {
    listFIVE.className = "list-five show-list-five"
  } else {
    listFIVE.className = "list-five hide-list-five"
  }
};

window.addEventListener("scroll", myScrollFuncfive);