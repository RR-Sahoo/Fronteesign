const card = document.querySelector('.card');
let color = document.querySelectorAll('.color');
const input = document.querySelector('input');

color.forEach(e => {
   e.addEventListener('click', e => {
      card.style.background = 
         window.getComputedStyle(e.target)
         .getPropertyValue("background");
      input.checked = false;
   });
});