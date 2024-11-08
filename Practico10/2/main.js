window.addEventListener("load", init)

function init () {

    const btn = document.getElementById("btn")
    btn.addEventListener("click", addNumber)

}

function addNumber () {

    const input = parseInt(document.getElementById("add_num").value)
    const list  = document.getElementById("list")

    let number = ''

    if (input % 2 === 0) {
        number = `${input} - The number is pair`
    } else {
        number = `${input} - The number is odd`
    }

    const newItem = document.createElement("li")
    newItem.innerHTML = number
    
    list.appendChild(newItem)

    document.getElementById("form").reset()
}