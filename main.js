var acc = document.getElementsByClassName("accordion");
var i;

function faq() {
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          } 
        });
      }
}


function one() {
 window.location.assign("one.html")
}

function two() {
  window.location.assign("two.html")
 }
 
 function three() {
  window.location.assign("three.html")
 }

 function four() {
  window.location.assign("four.html")
 }

 function five() {
  window.location.assign("five.html")
 }