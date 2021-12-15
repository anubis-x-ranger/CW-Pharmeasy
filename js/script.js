let flag = 0;
function controller(x) {
  flag = flag + x;
  slideshow(flag);
}
slideshow(0);

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
