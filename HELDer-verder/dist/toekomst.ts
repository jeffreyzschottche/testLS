let currentAccount = JSON.parse(localStorage.getItem('currentAccount')!);
let arrayAccString = `ArrayQA${currentAccount.id}`;
let saveSubmit = document.querySelector('.saveSubmit') as HTMLInputElement;

class Question {
    QuestionId: number;
    Answer: string;
    constructor(q:number,s:string){
        this.QuestionId = q;
        this.Answer = s;
    }
}

function createIDData(){
    if(localStorage.getItem(arrayAccString)){
        // de array is er dus vul HTML met antwoorden op
        let array = JSON.parse(localStorage.getItem(arrayAccString)!);
        // alert(array.length);
        for(let i = 0; i < array.length; i++){
            // alert(array[i].QuestionId);
            // alert(array[i].Answer);
            let paragraphName = `.answer${array[i].QuestionId}Saved`;
            let p = document.querySelector(paragraphName)!;
            p.textContent = array[i].Answer;
            // alert(paragraphName);
        }

        // de paragraph classname : answer1Saved
    }else{
        // array is er niet dus maak m
        localStorage.setItem(arrayAccString, JSON.stringify([]));
    }

}
// alert(currentAccount.name);

saveSubmit.addEventListener('click', () => {
    let answer1 = document.querySelector('.answer1') as HTMLInputElement;
    if(answer1.value.length > 1){
        // tekst mag in LS worden gezet
        let strippedNumberQuestion = parseInt(answer1.className.replace(/answer/g,''));
        let question = new Question(strippedNumberQuestion, answer1.value);
        let arr = JSON.parse(localStorage.getItem(arrayAccString)!);
        arr.push(question);
        localStorage.setItem(arrayAccString, JSON.stringify(arr));
        window.location.reload();
    }else{
        alert('er moet wel tekst zijn....');
    }
})