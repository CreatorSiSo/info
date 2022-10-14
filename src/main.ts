const numIceInput = document.querySelector("#num_ice") as HTMLInputElement;
const ateWhiteIceInput = document.querySelector(
	"#ate_white_ice"
) as HTMLInputElement;

const calcButton = document.querySelector("#calc_button") as HTMLButtonElement;

const whiteIceValue = document.querySelector("#white_ice_value") as HTMLElement;
const darkIceValue = document.querySelector("#dark_ice_value") as HTMLElement;

calcButton.addEventListener("click", (e) => {
	e.preventDefault;
	const numIce = parseFloat(numIceInput.value);
	const ateWhiteIce = parseFloat(ateWhiteIceInput.value);
	const numWhiteIce = Math.floor(Math.max(numIce * 0.45 - ateWhiteIce, 0));
	const numDarkIce = Math.floor(Math.max(numIce * 0.55 - 2 * ateWhiteIce, 0));

	whiteIceValue.textContent = (numWhiteIce * 1.2).toString() + "€";
	darkIceValue.textContent = (numDarkIce * 0.9).toString() + "€";
});

export {};
