
const screen = document.querySelector(".calculator-screen");
let expression = "";


function handleNumber(e) {
  const value = e.target.value;
  expression += value;
  screen.value = expression;
}

document.querySelectorAll(".operator").forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.value;
    const last = expression.slice(-1);

    if ("+-*/".includes(last)) return;

    expression += value;
    screen.value = expression;
  });
});

document.querySelector(".decimal").addEventListener("click", () => {
  const parts = expression.split(/[+\-*/]/);
  const lastNumber = parts[parts.length - 1];

  if (!lastNumber.includes(".")) {
    expression += ".";
    screen.value = expression;
  }
});
document.querySelector(".equal-sign").addEventListener("click", () => {
  if (!expression) return;                 // nothing to calculate
  if ("+-*/".includes(expression.slice(-1))) return; // incomplete

  const result = Function(`return ${expression}`)();
  expression = result.toString();
  screen.value = expression;
});

document.querySelector(".all-clear").addEventListener("click", () => {
  expression = "";
  screen.value = ""
 
}

);

document.querySelector(".clear-sign").addEventListener("click", () => {
  expression = expression.slice(0, -2);
  screen.value = expression;
});
