const btn = document.querySelector("#btn");
const header = document.querySelector(".header");
btn.addEventListener("click",()=>{
    var htop = header.computedStyleMap().get('top').value;
    console.log(htop);
    if(htop == "-140")
    {
        header.style.top = "0px";
    }
    else
    {
        header.style.top = "-140px"
    }
});