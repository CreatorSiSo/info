// Ein zylinderförmiger Behälter vom Durchmesser d1(m) und der Höhe h(m) wird durch einen Schlauch mit dem Durchmesser d2(cm) mit Wein gefüllt.
// Die Durchflussgeschwindigkeit ist v (m/s).
// Durch ein Programm soll die Zeit ermittelt werden, die zum vollständigen Füllen des Behälters benötigt wird.

// VZ = PI * r * r * h

// VS = PI * r * r * l          | l = vS * t
// VS = PI * r * r * vS * t

// VZ = VS
// PI * rZ * rZ * h = PI * rS * rS * vS * t  | /PI
// rZ * rZ * h = rS * rS * vS * t            | /(rS * rS * vS)
// t = (rZ * rZ * h) / (rS * rS * vS)

const calcTime = (h: number, rZ: number, rS: number, vS: number) =>
	(rZ * rZ * h) / (rS * rS * vS);

const heightInput = document.querySelector("#height") as HTMLInputElement;
const dCylindInput = document.querySelector("#d_cylinder") as HTMLInputElement;
const dTubeInput = document.querySelector("#d_tube") as HTMLInputElement;
const speedInput = document.querySelector("#speed") as HTMLInputElement;

const calcButton = document.querySelector("#calc_button") as HTMLButtonElement;
const timeStatus = document.querySelector("#time_status") as HTMLElement;

calcButton.addEventListener("click", (e) => {
	e.preventDefault;
	const h = parseFloat(heightInput.value);
	const rZ = parseFloat(dCylindInput.value) / 2;
	const rS = parseFloat(dTubeInput.value) / 200;
	const vS = parseFloat(speedInput.value);
	timeStatus.textContent = calcTime(h, rZ, rS, vS).toString() + "s";
});

export {};
