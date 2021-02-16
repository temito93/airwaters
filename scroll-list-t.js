listONE = document.getElementById("listONE");

var myScrollFuncthree = function() {
  var y = window.scrollY;
  if (y >= 550) {
    listONE.className = "list-one show-box-l"
  } else {
    listONE.className = "list-one hide-box-l"
  }
};

window.addEventListener("scroll", myScrollFuncthree);