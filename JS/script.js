window.onload = function() {
    typeWriter();
};

var i = 0;
var txt = 'Gabriel Habermann'; /* The text */
var speed = 125; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("WebTitle").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}