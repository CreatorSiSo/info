const form = document.querySelector("form") as HTMLFormElement;
const number1Input = document.querySelector(
	"#number_1_input"
) as HTMLInputElement;
const number2Input = document.querySelector(
	"#number_2_input"
) as HTMLInputElement;
const operatorSelect = document.querySelector(
	"#op_select"
) as HTMLSelectElement;

const resultElement = document.querySelector("#result") as HTMLElement;

form.addEventListener("submit", (e) => {
	e.preventDefault();
	resultElement.textContent = "Result: ";

	const number1 = parseFloat(number1Input.value);
	const number2 = parseFloat(number2Input.value);

	const operation = operatorSelect.value;

	switch (operation) {
		case "diff":
			resultElement.textContent += (
				number1 > number2 ? number1 - number2 : number2 - number1
			).toString();
			break;
		case "mul":
			resultElement.textContent += (number1 * number2).toString();
			break;
		case "div":
			if (number2 === 0) {
				resultElement.textContent = "Error: Cannot divide by 0";
				return;
			}
			resultElement.textContent += (number1 / number2).toString();
			break;
		case "sms":
			const discriminant = (number1 + number2) / (number1 * number2);
			const sqrt = Math.sqrt(discriminant);
			if (isNaN(sqrt) || !isFinite(sqrt)) {
				resultElement.textContent =
					"Error: Inputs cannot be 0 or both negative";
			} else {
				resultElement.textContent += sqrt.toString();
			}
			break;
		case "rem":
			resultElement.textContent +=
				number1 % number2 === 0
					? `${number1} is divisible by ${number2}`
					: `${number1} is not divisible by ${number2}`;
			break;
		case "sum":
			const [numbers, numbers_sum] = sum(number1, number2);
			resultElement.textContent += `Sum of [${numbers}] is ${numbers_sum}`;
			break;
		default:
			resultElement.textContent = "Error: Invalid Operation";
			return;
	}
});

function sum(number1: number, number2: number): [number[], number] {
	const start = (number1 < number2 ? number1 : number2) + 1;
	let numbers = [];
	for (let i = start; i < (number1 + number2) / 2; i += 1) {
		numbers.push(i);
	}
	if (numbers.length === 0) {
		numbers.push(0);
	}
	return [numbers, numbers.reduce((accum, num) => accum + num)];
}

export {};
