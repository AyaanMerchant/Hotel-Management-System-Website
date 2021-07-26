

var a = 0;
slideshow();

function slideshow() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  a++;
  if (a > x.length) {
    a = 1
  }
  x[a - 1].style.display = "block";
  setTimeout(slideshow, 2000); // Change image every 2 seconds
}
var b = 0;
abc();

function abc() {
  var i;
  var x = document.getElementsByClassName("heading-slides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  b++;
  if (b > x.length) {
    b = 1
  }
  x[b - 1].style.display = "block";
  setTimeout(abc, 2000); // Change image every 2 seconds
}







var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}