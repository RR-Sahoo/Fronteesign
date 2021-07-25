const clc = document.querySelector(".cancel");
const arr = document.querySelector(".arr-container");
const left_container = document.querySelector(".left-container");

arr.addEventListener("click",()=>{
    arr.classList.add("active-arr");
    if(left_container.classList.contains("off")){
        left_container.classList.remove("off");
        left_container.classList.add("active");
    }
});

clc.addEventListener("click",()=>{
    arr.classList.remove("active-arr");
    if(left_container.classList.contains("active")){
        left_container.classList.remove("active");
        left_container.classList.add("off");
    }
});