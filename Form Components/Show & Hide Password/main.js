const password = document.querySelector("input");
const showPassword = document.querySelector("span i");
showPassword.onclick = (()=>{
    if (password.type === "password")
    {
        password.type = "text";
        showPassword.classList.add("hide-btn");
    }
    else{
        password.type = "password";
        showPassword.classList.remove("hide-btn");
    }
});