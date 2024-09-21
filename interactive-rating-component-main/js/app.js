const submit = document.getElementById("submit");
const message = document.getElementById("message");
const alertItem = document.getElementById("alert");
const buttons = document.querySelectorAll('.container__button');

let selected = null

buttons.forEach((btn,index) => {
    btn.addEventListener('click', function () { 
        
        console.log(index + 1);
        selected = index + 1

        buttons.forEach(button => button.classList.remove('active'))
        buttons[index].classList.add('active')
     
    })
})

submit.addEventListener('click', () =>{
    if (selected !== null) {
        message.textContent = selected 
        alertItem.classList.add('show')
    }
})
