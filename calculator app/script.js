let screen = document.getElementById('screen');

function addToScreen(value) {
  screen.value += value;
}

function clearScreen() {
  screen.value = '';
}

function calculate() {
  let result = eval(screen.value);
  screen.value = result;
}
