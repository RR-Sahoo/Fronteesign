const password = document.getElementById('password');
const background = document.getElementById('background');

password.addEventListener('input', (e) => {
   const input = e.target.value;
   const length = input.length;
   const blurvalue = 20 - length * 2;
   background.style.filter = `blur(${blurvalue}px)`;
});

const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
   social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
   social_panel_container.classList.remove('visible')
});