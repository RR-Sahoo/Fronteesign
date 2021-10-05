const tab = document.querySelectorAll(".tab");

tab[0].checked = true;

tab.forEach((i) => {
    i.addEventListener("click",(event)=>{
        tab.forEach((e) => {
            e.checked = false;
            e.parentElement.classList.remove("active");
        })
        event.target.checked = true;
        i.parentElement.classList.add("active");
    })
});