
let username = document.getElementById('username')
let password = document.getElementById('password')
let flag = 1;

function validateForm() {
    if (username.value === "") {
        document.getElementById('userError').innerHTML = 'User Name is empty';
        flag = 0;
    }
    else if (username.value.length < 4) {
        document.getElementById('userError').innerHTML = 'User Name require minimum 4 characters';
        flag = 0;
    }
    else {
        document.getElementById('userError').innerHTML = '';
        flag = 1;
    }
    if (password.value === "") {
        document.getElementById('passError').innerHTML = 'Password is empty';
        flag = 0;
    }
    else if (password.value.length < 6) {
        document.getElementById('passError').innerHTML = 'Password require minimum 6 characters';
        flag = 0;
    }
    else {
        document.getElementById('passError').innerHTML = '';
        flag = 1;
    }

    if (flag) {
        return true;
    }
    else {
        return false;
    }

}