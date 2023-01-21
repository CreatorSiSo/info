fn print_calendar(year: u32, month: u8) -> String {
	let mut calendar = String::from("Mo Di Mi Do Fr Sa So\n");
	let first_weekday = day_of_week(year, month, 1);

	// leave the first fields empty so that the calendar starts at the correct day
	for _ in 0..first_weekday {
		calendar += "   ";
	}

	for current_day in 1..=month_length(year, month) {
		// push number of the day onto calendar
		calendar += &current_day.to_string();

		// align the next field using spaces
		calendar += " ";
		if current_day <= 9 {
			calendar += " ";
		}

		// push newline after end of a week
		let field_index = first_weekday + current_day;
		if field_index % 7 == 0 {
			calendar += "\n";
		}
	}

	return calendar;
}

// https://www.geeksforgeeks.org/tomohiko-sakamotos-algorithm-finding-day-week
// http://blog.marcinchwedczuk.pl/get-day-of-week-from-date
fn day_of_week(mut year: u32, month: u8, day: u8) -> u8 {
	// leading number of days
	let offsets = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];

	if month < 3 {
		year -= 1
	};

	return ((year + day as u32 + offsets[(month - 1) as usize] + (year / 4) - (year / 100)
		+ (year / 400)
		- 1) % 7) as u8;
}

fn month_length(year: u32, month: u8) -> u8 {
	// february
	if month == 2 {
		return if is_leap_year(year) { 29 } else { 28 };
	}
	// odd month
	if month % 1 == 0 {
		return 31;
	}
	// even month
	30
}

fn is_leap_year(year: u32) -> bool {
	if year % 4 == 0 || year % 100 == 0 && year % 400 == 0 {
		true
	} else {
		false
	}
}

// use `cal [month] [year]` to validate
fn main() {
	// console.log(print_calendar(2000, 1));
	// console.log(print_calendar(2020, 1));
	// console.log(print_calendar(5555, 1));
	println!("{}", print_calendar(2023, 1));
}

#[test]
fn test() {
	assert_eq!(is_leap_year(2000), true);
	assert_eq!(is_leap_year(2023), false);
	assert_eq!(month_length(2000, 2), 29);
	assert_eq!(month_length(2020, 2), 29);
	assert_eq!(month_length(2023, 2), 28);
	// assert_eq!(day_of_week(100, 1, 1), 2);
	// assert_eq!(day_of_week(500, 1, 1), 5);
	// assert_eq!(day_of_week(1000, 1, 1), 0);
	// assert_eq!(day_of_week(1100, 1, 1), 6);
	// assert_eq!(day_of_week(1120, 1, 1), 4);
	assert_eq!(day_of_week(1121, 1, 1), 5);
	assert_eq!(day_of_week(1122, 1, 1), 6);
	assert_eq!(day_of_week(1125, 1, 1), 3);
	assert_eq!(day_of_week(1130, 1, 1), 2);
	assert_eq!(day_of_week(1150, 1, 1), 6);
	assert_eq!(day_of_week(1160, 1, 1), 4);
	assert_eq!(day_of_week(1175, 1, 1), 2);
	assert_eq!(day_of_week(1190, 1, 1), 0);
	assert_eq!(day_of_week(1200, 1, 1), 5);
	assert_eq!(day_of_week(1800, 1, 1), 2);
	assert_eq!(day_of_week(2000, 1, 1), 5);
	assert_eq!(day_of_week(2020, 1, 1), 2);
	assert_eq!(day_of_week(2023, 1, 1), 6);
	assert_eq!(day_of_week(3000, 1, 1), 2);
	assert_eq!(day_of_week(5555, 1, 1), 5);
}
