let beans = 0;
let water = 0;

const getCoffee = () => {
	const [beansFuture, waterFuture] = [beans - 2, water - 5];
	if (!(beansFuture < 0 || waterFuture < 0)) {
		beans = beansFuture;
		water = waterFuture;
	}
};

const refill = () => {
	beans += 20;
	water += 45;
};

const coffeeButton = document.querySelector(
	"#coffee_button"
) as HTMLButtonElement;
const refillButton = document.querySelector(
	"#refill_button"
) as HTMLButtonElement;
const beansStatus = document.querySelector("#beans_status") as HTMLElement;
const waterStatus = document.querySelector("#water_status") as HTMLElement;

const updateText = () => {
	beansStatus.textContent = beans.toString();
	waterStatus.textContent = water.toString();
};

coffeeButton.addEventListener("click", (e) => {
	e.preventDefault;
	getCoffee();
	updateText();
});
refillButton.addEventListener("click", (e) => {
	e.preventDefault;
	refill();
	updateText();
});

updateText();

export {};
