let count = 0;
const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
	count++;
	CURRENT_NUMBER.innerHTML = count;
    if (CURRENT_NUMBER.innerHTML < 0){
        CURRENT_NUMBER.style.color="red";
    } else {
        CURRENT_NUMBER.style.color="black";
    }
}
function decrement() {
	count--;
	CURRENT_NUMBER.innerHTML = count;
    if (CURRENT_NUMBER.innerHTML >= 0){
        CURRENT_NUMBER.style.color="black";
     } else {
         CURRENT_NUMBER.style.color="red";
     } 
    }


    function test() {
        kdowkdpo;
    }
