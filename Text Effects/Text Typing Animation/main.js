var i = 0;
var text = 'I m Anwesh Mishra Full Stack Developer.';
type();
function type() {
   if (i < text.length) {
      document.getElementById("text").innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 100);
   }
}