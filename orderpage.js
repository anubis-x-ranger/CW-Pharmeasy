
// document.querySelector(".count").addEventListener("click", addCart)
// document.querySelector(".count1").addEventListener("click", addCart)
// var count = localStorage.getItem("counter")||0
// function addCart(event) {
   
//      count++;
//      localStorage.setItem("counter", count);
//      document.querySelector(".visible").textContent = count;
// }

document.querySelector("#cartpage").addEventListener("click", function(){
    window.location.href = "PaymentPage.html"
})
document.querySelector("#loginPage").addEventListener("click", function(){
    window.location.href = "signup.html"
})
function gotoHOME(){
    window.location.href = "index.html"
}
function OM(){
    window.location.href = "orderpage.html"
}
function HP(){
    window.location.href = "hcc.html"
}
function sighn() {
    window.location.href = "signup.html"
}
function carth(){
    window.location.href = "PaymentPage.html"
}