let beans = 0
let water = 0

const getCoffee = () => {
  beans = Math.max(beans - 2, 0)
  water = Math.max(water - 5., 0)
}

const refill = () => {
  beans += 20
  water += 45
}

const coffeeButton = document.querySelector("#coffee_button") as HTMLButtonElement
const refillButton = document.querySelector("#refill_button") as HTMLButtonElement
const beansStatus = document.querySelector("#beans_status") as HTMLElement
const waterStatus = document.querySelector("#water_status") as HTMLElement

const updateText = () => {
  beansStatus.textContent = beans.toString()
  waterStatus.textContent = water.toString()
}

coffeeButton.addEventListener("click", (e) => {
  e.preventDefault
  getCoffee()
  updateText()
})
refillButton.addEventListener("click", (e) => {
  e.preventDefault
  refill()
  updateText()
})

updateText()

export { }