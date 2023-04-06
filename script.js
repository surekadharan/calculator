let display = document.querySelector(".display");

function updateDisplay(value) {
  display.value += value;
}

function calculate() {
  display.value = eval(display.value);
}
function clear(){
    display.value=" ";
}