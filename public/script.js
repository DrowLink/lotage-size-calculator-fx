
const calcular = () => {
    const dolaresAPerder = document.getElementById("dolaresAPerder")
    const pipsDeStopLoss = document.getElementById("pipsDeStopLoss")
    
    const result = (dolaresAPerder.value / pipsDeStopLoss.value) / 10
    const resultYEN = ((dolaresAPerder.value / pipsDeStopLoss.value) / 10) * 1.3

    const displayResult = document.getElementById("paresNormales").innerHTML = result
    const displayResultYEN = document.getElementById("paresConYEN").innerHTML = resultYEN
    
}