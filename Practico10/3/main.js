window.addEventListener("load", init)

function init () {
    const btn = document.getElementById("add")
    btn.addEventListener("click", getWord)
    
    const form = document.getElementById("form")
    form.addEventListener("submit", e => e.preventDefault())
}

function getWord () {
    const input = document.getElementById("add_word").value
    addToTable(input, palindrome(input))

    document.getElementById("form").reset()
}

function addToTable (word, palindromidad) {
   
    const table = document.getElementById("table")
    const row = table.insertRow()
    const cell = row.insertCell()
    const cell2 = row.insertCell()

    cell.innerHTML = word
    cell2.innerHTML = palindromidad
}

function palindrome (word) {

    let check = 'NO'

    let reverse = ''
    for (let i = word.length -1; i >= 0; i--){
        reverse += word[i]
    }

    if(word.toLowerCase() === reverse.toLowerCase()) {
        check = 'YES'
    }

    return check
}