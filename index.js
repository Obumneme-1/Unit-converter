/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const meterToFeet = 3.281
const literToGallon = 0.264
const kilogramToPound = 2.204

const inputEl = document.getElementById("input-field")
const convertBtn = document.getElementById("convert-btn")
const resetBtn = document.getElementById("reset-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const incrementBtn = document.getElementById("increment-btn")
const decrementBtn = document.getElementById("decrement-btn")

convertBtn.addEventListener("click", function () {
    const baseValue = Number(inputEl.value)
    const feet = (baseValue * meterToFeet).toFixed(3)
    const meter = (baseValue / meterToFeet).toFixed(3)
    const gallon = (baseValue * literToGallon).toFixed(3)
    const liter = (baseValue / literToGallon).toFixed(3)
    const pound = (baseValue * kilogramToPound).toFixed(3)
    const kilogram = (baseValue / kilogramToPound).toFixed(3)

    lengthEl.innerHTML = `Length (metre/feet)<p> ${baseValue} meters = ${feet} feet | ${baseValue} feet = ${meter} meters </p> `
    volumeEl.innerHTML = `Volume(Liters/Gallons)<p>${baseValue} liters = ${gallon} gallons | ${baseValue} gallons = ${liter} liters </p>`
    massEl.innerHTML = `Mass (Kilogram/Pounds)<p>${baseValue} kilograms = ${pound} pounds | ${baseValue} pounds = ${kilogram} kilograms </p>` 
})

resetBtn.addEventListener("click", function() {
    inputEl.value = ""
    lengthEl.textContent = "Length (Meter/feet)"
    volumeEl.textContent = "Volume (Liters/Gallons)"
    massEl.textContent = "Mass (Kilograms/Pounds)"
})

incrementBtn.addEventListener("click", function () {
    let baseValue = Number(inputEl.value)
    baseValue +=1
    inputEl.value = baseValue
})

decrementBtn.addEventListener("click", function() { 
    let baseValue = Number(inputEl.value)
    baseValue -=1
    inputEl.value = baseValue
})