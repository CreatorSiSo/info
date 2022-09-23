import Konva from "konva";

const form = document.querySelector("form") as HTMLFormElement
const heightInput = document.querySelector("#height_input") as HTMLInputElement
const widthInput = document.querySelector("#width_input") as HTMLInputElement
const diagonalResult = document.querySelector("#diagonal_result") as HTMLElement
const areaResult = document.querySelector("#area_result") as HTMLElement
const circumferenceResult = document.querySelector("#circumference_result") as HTMLElement
const alphaResult = document.querySelector("#alpha_result") as HTMLElement
const betaResult = document.querySelector("#beta_result") as HTMLElement

const radiansToDegrees = (rad: number) => rad * (180 / Math.PI)
const roundDecimal = (num: number, decimals: number) => {
  const tmp = Math.pow(10, decimals)
  return Math.round((num + Number.EPSILON) * tmp) / tmp
}

const preview = new Konva.Stage({
  container: 'triangle_preview',
  width: 500,
  height: 200
})

const layer = new Konva.Layer()

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const height = parseFloat(heightInput.value)
  const width = parseFloat(widthInput.value)

  const diagonal = Math.sqrt(height * height + width * width)
  const area = (height * width) / 2
  const circumference = diagonal + height + width

  // G   A
  // H   H
  // sin cos
  //
  // sin(alpha) = height / diagonal
  // cos(beta) = height / diagonal
  const alpha = Math.asin(height / diagonal)
  const beta = Math.acos(height / diagonal)

  diagonalResult.textContent = roundDecimal(diagonal, 3).toString()
  areaResult.textContent = roundDecimal(area, 3).toString()
  circumferenceResult.textContent = roundDecimal(circumference, 3).toString()
  alphaResult.textContent = roundDecimal(radiansToDegrees(alpha), 3) + "°"
  betaResult.textContent = roundDecimal(radiansToDegrees(beta), 3) + "°"

  const drawWidth = preview.width() * 0.8
  const drawHeight = preview.height() * 0.8 * (height / width)
  const offsetX = (preview.width() - drawWidth) / 2
  const offsetY = (preview.height() - drawHeight) / 2

  const triangle = new Konva.Line({
    points: [offsetX, drawHeight + offsetY, drawWidth + offsetX, drawHeight + offsetY, drawWidth + offsetX, offsetY],
    fill: '#f0f0f0',
    stroke: 'black',
    strokeWidth: 2,
    closed: true,
  });

  layer.add(triangle)
  preview.add(layer)
  preview.clear()
  layer.draw()
})

export { }