window.addEventListener('scroll',moveScrollIndicator);
const scrollIndicatorElt = document.getElementById('scrollIndicator');

const maxheight = window.document.body.scrollHeight - window.innerHeight;

function moveScrollIndicator(e) {
    const percentage = ((window.scrollY) / maxheight) * 100;
    scrollIndicatorElt.style.width = percentage + '%';
}