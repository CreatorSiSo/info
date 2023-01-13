const form = document.querySelector("form") as HTMLFormElement;
const max_input = document.querySelector("#max_input") as HTMLInputElement;
const result = document.querySelector("#result") as HTMLPreElement;
const button_1 = document.querySelector("#button_1") as HTMLButtonElement;
const button_2 = document.querySelector("#button_2") as HTMLButtonElement;

form.addEventListener("submit", (e) => e.preventDefault());

button_1.addEventListener("click", () => {
	const max = parseInt(max_input.value);
	result.textContent = range_inclusive(0, max).join(", ");
});

button_2.addEventListener("click", () => {
	const max = parseInt(max_input.value);
	result.textContent = range_inclusive(0, max).join(",\n");
});

const range_inclusive = (start: number, end: number) =>
	Array.from({ length: end - start + 1 }, (_, i) => i + start);

export {};
