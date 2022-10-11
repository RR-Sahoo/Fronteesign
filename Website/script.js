let circle = document.querySelector(".circle");
let upBtn = document.getElementById('upBtn');
let downBtn = document.getElementById('downBtn');

let rotateValue = circle.style.transform;
let rotateSum;

upBtn.addEventListener('click', () => {
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    // UPDATING VALUE OF ROTATEVALUE
    rotateValue = rotateSum;
    console.log("hi")
})

downBtn.addEventListener('click', () => {
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
})