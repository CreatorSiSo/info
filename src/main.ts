const form = document.querySelector("form") as HTMLFormElement;
const amountInput = document.querySelector(
	"#amount_bottles_input"
) as HTMLInputElement;
const resultElement = document.querySelector("#result") as HTMLElement;

form.addEventListener("submit", (e) => {
	e.preventDefault();
	let amount = parseFloat(amountInput.value);

	resultElement.textContent = "";

	for (; amount > 0; amount -= 1) {
		resultElement.textContent +=
			amount === 1
				? "Nur noch eine Flasche Cola im Kühlschrank\n"
				: `${amount} Flaschen im Kühlschrank!\n`;
	}

	resultElement.textContent += "Alle Flaschen sind ausgetrunken!\n";
});

export {};
