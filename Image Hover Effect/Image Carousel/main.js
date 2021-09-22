let slide = document.querySelectorAll('.slide span');
for(var i = 0; i < slide.length; i++) {
   slide[i].addEventListener('click', activateClass);
}
function activateClass(e) {
   let images = document.querySelector("#images")
   let imgs = ["https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706_960_720.jpg",
                "https://cdn.pixabay.com/photo/2021/08/30/21/29/port-6587129_960_720.jpg",
                "https://cdn.pixabay.com/photo/2016/08/09/21/54/lake-1581879_960_720.jpg"];
   for (var i = 0; i < slide.length; i++) {
      slide[i].classList.remove('show');
   }
   e.target.classList.add('show');
   var x = Array.from(slide).indexOf(event.target)
   images.setAttribute("src", imgs[x])
}