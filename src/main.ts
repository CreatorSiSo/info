const form = document.querySelector("form") as HTMLFormElement;
const year_input = document.querySelector("#year_input") as HTMLInputElement;
const month_input = document.querySelector("#month_input") as HTMLSelectElement;
const result = document.querySelector("#result") as HTMLPreElement;

form.addEventListener("submit", (e) => e.preventDefault());

year_input.value = new Date(Date.now()).getFullYear().toString();
printCalendar();
year_input.addEventListener("input", printCalendar);
month_input.addEventListener("change", printCalendar);

function printCalendar() {
	result.textContent = calendar_string(
		parseInt(year_input.value),
		parseInt(month_input.value)
	);
}

function calendar_string(year: number, month: number): string {
	const month_length = days_in_month(year, month);
	const first_day = new Date(year, month, 1).getUTCDay();
	const data = [
		"Montag",
		"Dienstag",
		"Mittwoch",
		"Donnerstag",
		"Freitag",
		"Samstag",
		"Sonntag",
		...Array.from({ length: first_day }, () => "--"),
		...range_inclusive(1, month_length).map((date) => date.toString()),
	].map((field) => field.padEnd(10, " "));

	const rows = Array.from(chunks(data, 7));
	return rows.map((row) => row.join(" | ")).join("\n");
}

function days_in_month(year: number, month: number): number {
	return new Date(year, month, 0).getDate();
}

function range_inclusive(start: number, end: number): number[] {
	return Array.from({ length: end - start + 1 }, (_, i) => i + start);
}

function* chunks<T>(array: T[], chunk_size: number): Generator<T[], void> {
	for (let i = 0; i < array.length; i += chunk_size) {
		yield array.slice(i, i + chunk_size);
	}
}

export {};
