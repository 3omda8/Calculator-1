const display = document.getElementById("in");

function append(input) {
  display.value += input;
}

function ac() {
  display.value = "";
}

function del() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
