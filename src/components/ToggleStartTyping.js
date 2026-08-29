const start = document.querySelector('#start');
const wordContainer = document.querySelector('.word__container');
const buttonContainer = document.querySelector('.button-container');
const inputTyping = document.querySelector('#typing-input');


export default function startTyping() {
    
    start.addEventListener('click', () => {
        wordContainer.classList.add("isStart");
        buttonContainer.classList.add('isHidden');
        inputTyping.focus()
    })
    
    document.addEventListener('keyup', () => {
        wordContainer.classList.add("isStart");
        buttonContainer.classList.add('isHidden');
        inputTyping.focus()
    }, { once: true }) // remueve el listener 



}



