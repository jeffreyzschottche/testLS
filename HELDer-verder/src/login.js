"use strict";
let submitLogin = document.querySelector('.submitLogin');
let passwordLogin = document.querySelector('.passwordLogin');
let usernameLogin = document.querySelector('.usernameLogin');
submitLogin.addEventListener('click', () => {
    if (submitLogin.value.length > 1 && passwordLogin.value.length > 1) {
        // can login
        let accArr = JSON.parse(localStorage.getItem('accArray'));
        for (let i = 0; i < accArr.length; i++) {
            if (accArr[i].name === usernameLogin.value && accArr[i].password === passwordLogin.value) {
                localStorage.setItem('currentAccount', JSON.stringify(accArr[i]));
                let paragraph = document.querySelector('.errorOutput');
                paragraph.style.display = 'none';
                let paragraph2 = document.querySelector('.succesOutput');
                paragraph2.textContent = 'Please proceed with future authoring';
                let a1 = document.createElement('a');
                a1.textContent = 'Go to future Authoring';
                a1.href = '/toekomst.html';
                let formLogin = document.querySelector('.formLogin');
                formLogin.appendChild(a1);
                //succesOutput
            }
            else {
                let paragraph = document.querySelector('.errorOutput');
                paragraph.textContent = 'Please fill out the right username and password';
            }
        }
    }
    else {
        // provide feedback to user
        let paragraph = document.querySelector('.errorOutput');
        paragraph.textContent = 'Please fill out the right username and password';
    }
});
