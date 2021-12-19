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

//  <!-- -->
// When the user scrolls the page, execute myFunction
// window.onscroll = function () {
//   myFunction();
// };

// // Get the navbar
// var navbar = document.querySelector("#containerHead");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky");
//   }
// }

document.querySelector("#HEADimg").addEventListener("click", function(){
  window.location.href = "index.html"
})
document.querySelector("#OrderMed").addEventListener("click", function(){
  window.location.href = "orderpage.html"
})
document.querySelector("#HCC").addEventListener("click", function(){
  window.location.href = "hcc.html"
})

function OrderMed1() {
  window.location.href = "orderpage.html"
}
function HCC1(){
  window.location.href = "hcc.html"
}
function signup(){
  window.location.href = "signup.html"
}

function carth() {
  window.location.href= "PaymentPage.html"
}