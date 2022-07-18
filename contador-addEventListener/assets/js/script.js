let count = 0;
let adicionar = document.getElementById("adicionar")
let subtrair = document.getElementById("subtrair")
const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
	count++;
	CURRENT_NUMBER.innerHTML = count;
    if (CURRENT_NUMBER.innerHTML >= 9){
        adicionar.addEventListener ("click", () => {adicionar.disabled = true;})
    }
}
function decrement() {
	count--;
	CURRENT_NUMBER.innerHTML = count;
}
function test() {
	kdowkdpo;
}