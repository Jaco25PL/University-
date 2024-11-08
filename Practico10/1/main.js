/*
1. Bring the inputs
2. Do the functionality
3. Add the action in the buttom, also bring it
4. Bring the span where the result will be display and insert a new line
*/

window.addEventListener('load', init)

function init() {
    const btn = document.getElementById("btn")
    btn.addEventListener("click", calculateResult)
}

function calculateResult() {

    const firstNumber = parseInt(document.getElementById("first_number").value)
    const secondNumber = parseInt(document.getElementById("second_number").value)
    const action = document.getElementById("action").value

    let result

    switch (action) {
        case "+":
            result = firstNumber + secondNumber
            break
        case "-":
            result = firstNumber - secondNumber
            break
        case "*":
            result = firstNumber * secondNumber
            break
        case "/":
            result = firstNumber / secondNumber
            break
        default:
            result = "Invalid operation"
    }

    document.getElementById("show_result").innerText = `The result is: ${result}`
}
