const head = "Mo Di Mi Do Fr Sa So\n";

function printCalendar(year: number, month: number): string {
	let calendar = head;
	const first_weekday = day_of_week(year, month, 1);

	// leave the first fields empty so that the calendar starts at the correct day
	for (let field_index = 0; field_index < first_weekday; field_index += 1) {
		calendar += "   ";
	}

	for (
		let current_day = 1;
		current_day <= month_length(year, month);
		current_day += 1
	) {
		// push number of the day onto calendar
		calendar += current_day;

		// align the next field using spaces
		calendar += " ";
		if (current_day <= 9) {
			calendar += " ";
		}

		// push newline after end of a week
		const field_index = first_weekday + current_day;
		if (field_index % 7 === 0) {
			calendar += "\n";
		}
	}

	return calendar;
}

// https://www.geeksforgeeks.org/tomohiko-sakamotos-algorithm-finding-day-week
function day_of_week(year: number, month: number, day: number) {
	// leading number of days
	let offsets = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];

	if (month < 3) year -= 1;

	return (
		(year +
			day +
			offsets[month - 1] +
			Math.floor(year / 4) -
			Math.floor(year / 100) +
			Math.floor(year / 400) -
			1) %
		7
	);
}

function month_length(year: number, month: number): number {
	// february
	if (month === 2)
		if (is_leap_year(year)) return 29;
		else return 28;
	// odd month
	if (month % 1 === 0) return 31;
	// even month
	return 30;
}

function is_leap_year(year: number): boolean {
	if (year % 4 === 0) return true;
	if (year % 100 === 0 && year % 400 === 0) return false;
	return false;
}

function assert<T>(left: T, right: T) {
	if (left !== right)
		throw new Error(`Failed assertion, ${left} does not equal ${right}`);
}

assert(is_leap_year(2000), true);
assert(is_leap_year(2023), false);
assert(month_length(2000, 2), 29);
assert(month_length(2020, 2), 29);
assert(month_length(2023, 2), 28);
// assert(day_of_week(100, 1, 1), 2);
// assert(day_of_week(500, 1, 1), 5);
// assert(day_of_week(1000, 1, 1), 0);
// assert(day_of_week(1100, 1, 1), 6);
// assert(day_of_week(1120, 1, 1), 4);
assert(day_of_week(1121, 1, 1), 5);
assert(day_of_week(1122, 1, 1), 6);
assert(day_of_week(1125, 1, 1), 3);
assert(day_of_week(1130, 1, 1), 2);
assert(day_of_week(1150, 1, 1), 6);
assert(day_of_week(1160, 1, 1), 4);
assert(day_of_week(1175, 1, 1), 2);
assert(day_of_week(1190, 1, 1), 0);
assert(day_of_week(1200, 1, 1), 5);
assert(day_of_week(1800, 1, 1), 2);
assert(day_of_week(2000, 1, 1), 5);
assert(day_of_week(2020, 1, 1), 2);
assert(day_of_week(2023, 1, 1), 6);
assert(day_of_week(3000, 1, 1), 2);
assert(day_of_week(5555, 1, 1), 5);

// console.log(printCalendar(2000, 1));
// console.log(printCalendar(2020, 1));
// console.log(printCalendar(5555, 1));
console.log(printCalendar(2023, 1));

export {};
