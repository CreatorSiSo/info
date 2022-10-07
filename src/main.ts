const bruttoInput = document.querySelector("#brutto") as HTMLInputElement;
const rentInput = document.querySelector("#rent") as HTMLInputElement;

const calcButton = document.querySelector("#calc_button") as HTMLButtonElement;

const netto1Status = document.querySelector("#netto_1_status") as HTMLElement;
const netto2Status = document.querySelector("#netto_2_status") as HTMLElement;
const nettoStatus = document.querySelector("#netto_status") as HTMLElement;
const restStatus = document.querySelector("#rest_status") as HTMLElement;

calcButton.addEventListener("click", (e) => {
	e.preventDefault;
	const brutto = parseFloat(bruttoInput.value);
	const netto1 = brutto - brutto * 0.19;
	const netto2 = brutto - brutto * 0.05;
	const netto = netto1 - netto1 * 0.05;
	const rest = netto - parseFloat(rentInput.value);

	netto1Status.textContent = netto1.toString() + "€";
	netto2Status.textContent = netto2.toString() + "€";
	nettoStatus.textContent = netto.toString() + "€";
	restStatus.textContent = rest.toString() + "€";
});

export {};
