"use strict";
let submitButton = document.querySelector('.submit');
let username = document.querySelector('.username');
let password = document.querySelector('.password');
class User {
    constructor(n, p, id) {
        this.name = n;
        this.password = p;
        this.id = id;
    }
}
function createLocalStorage() {
    if (localStorage.getItem('accArray')) {
        return;
    }
    else {
        let accArr = [];
        localStorage.setItem('accArray', JSON.stringify(accArr));
    }
}
submitButton.addEventListener('click', () => {
    if (username.value.length > 1 && password.value.length > 1) {
        let randomId = Math.floor(Math.random() * 100);
        let newAccount = new User(username.value, password.value, randomId);
        // alert(username.value + ' ' + password.value + ' ' + randomId);
        sendAccountToLS(newAccount);
    }
    else {
        let errorP = document.querySelector('.errorOutput');
        errorP.textContent = 'Please fill out all the fields';
    }
});
function sendAccountToLS(user) {
    let accArr = JSON.parse(localStorage.getItem('accArray'));
    accArr.push(user);
    localStorage.setItem('accArray', JSON.stringify(accArr));
    username.value = '';
    password.value = '';
    let errorP = document.querySelector('.errorOutput');
    errorP.textContent = 'Account registered';
    let loginLink = document.querySelector('.loginLink');
    loginLink.textContent = 'Login Here';
}
