let flag = 0;
function controller(x) {
  flag = flag + x;
  slideshow(flag);
}

function slideshow(num) {
  let slides = document.getElementsByClassName("slide");
  if (num == slides.length) {
    num = 0;
    flag = 0;
  }
  if (num < 0) {
    flag = slides.length - 1;
    num = slides.length - 1;
  }
  for (let y of slides) {
    y.style.display = "none";
  }
  slides[num].style.display = "block";
}

var slideIndex = 0;

carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 5000); // Change image every 5 seconds
}
