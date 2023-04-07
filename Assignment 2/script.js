const display = document.querySelector("#display");
let curValue = 0;

const btnDecrement5 = document.querySelector("#decrement5");
const btnDecrement = document.querySelector("#decrement");
const btnReset = document.querySelector("#reset");
const btnIncrement = document.querySelector("#increment");
const btnIncrement5 = document.querySelector("#increment5");
const custom = document.querySelector("input");

btnDecrement5.addEventListener("click", () => {
	curValue = curValue - 5;
	display.textContent = curValue;
	color();
});
btnDecrement.addEventListener("click", () => {
	curValue = curValue - 1;
	display.textContent = curValue;
	color();
});
btnReset.addEventListener("click", () => {
	curValue = 0;
	display.textContent = curValue;
	color();
});
btnIncrement.addEventListener("click", () => {
	curValue = curValue + 1;
	display.textContent = curValue;
	color();
});
btnIncrement5.addEventListener("click", () => {
	curValue = curValue + 5;
	display.textContent = curValue;
	color();
});
custom.addEventListener("change", () => {
	let x = custom.value;
	curValue = curValue + Number(x);
	display.textContent = curValue;
	color();
});

function color() {
	if (curValue < 0) {
		display.style.color = "red";
	}
	if (curValue > 0) {
		display.style.color = "green";
	}
	if (curValue === 0) {
		display.style.color = "black";
	}
}
