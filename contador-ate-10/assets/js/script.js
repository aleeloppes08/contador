let count = 0;
let adicionar = document.getElementById("adicionar")
let subtrair = document.getElementById("subtrair")
const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
	count++;
	CURRENT_NUMBER.innerHTML = count;
    if (CURRENT_NUMBER.innerHTML >= 10 ){
        adicionar.disabled = true;
        }
    if (CURRENT_NUMBER.innerHTML > 0) {
        subtrair.disabled = false;
    }
}
function decrement() {
	count--;
	CURRENT_NUMBER.innerHTML = count;
    if (CURRENT_NUMBER.innerHTML < 10){
        adicionar.disabled = false;
         }
    if (CURRENT_NUMBER.innerHTML <= 0){
        subtrair.disabled = true;
    }
}
    function test() {
        kdowkdpo;
    }