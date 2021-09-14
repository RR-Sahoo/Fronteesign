const clc = document.querySelector('.clc-btn');
const hum = document.querySelector('.hum-btn');
const navbar = document.querySelector('.navbar');
const main = document.querySelector('.main');
const a = document.querySelectorAll('a');

hum.addEventListener("click" , ()=> {
   navbar.classList.add('active_navbar');
   main.classList.add('active_main');
});
clc.addEventListener("click" , ()=> {
   navbar.classList.remove('actie_navbar');
   main.classList.remove('active_main');
});
a.forEach(function(e){
   e.addEventListener("click" , ()=> {
      navbar.classList.remove('active_navbar');
      main.classList.remove('active_main');
   })
})