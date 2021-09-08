const toggle = document.querySelector('.toggle');
toggle.addEventListener('click',()=>{
    const shareBtn = document.querySelector('.share');
    shareBtn.classList.toggle('active');
})