let submitButton = document.querySelector('.submit') as HTMLInputElement;
let username = document.querySelector('.username') as HTMLInputElement;
let password = document.querySelector('.password') as HTMLInputElement;

interface Account{
    name : string;
    password: string;
    id: number;
}
class User{
    name : string;
    password: string;
    id: number;
    constructor(n:string,p:string,id:number){
        this.name = n;
        this.password = p;
        this.id = id;
    }
}

function createLocalStorage(){
    if(localStorage.getItem('accArray')){
        return;
    }else{
       let accArr : Account[] = [];
       localStorage.setItem('accArray',JSON.stringify(accArr));
    }
}


submitButton.addEventListener('click', () => {
    if(username.value.length > 1 && password.value.length > 1){
        let randomId = Math.floor(Math.random() * 100);
        let newAccount = new User(username.value, password.value, randomId);
        // alert(username.value + ' ' + password.value + ' ' + randomId);
        sendAccountToLS(newAccount);
    }
    else{
        let errorP = document.querySelector('.errorOutput') as HTMLParagraphElement;
        errorP.textContent = 'Please fill out all the fields';
    }
})

function sendAccountToLS(user:Account){
    let accArr = JSON.parse(localStorage.getItem('accArray')!)
    accArr.push(user);
    localStorage.setItem('accArray',JSON.stringify(accArr));
    username.value = '';
    password.value = '';
    let errorP = document.querySelector('.errorOutput') as HTMLParagraphElement;
    errorP.textContent = 'Account registered';
    let loginLink = document.querySelector('.loginLink') as HTMLAnchorElement;
    loginLink.textContent = 'Login Here'
}