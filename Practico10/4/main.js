window.addEventListener('load', init)

const init = () => {
    const btn = document.querySelector('#btn')
    btn.addEventListener('click', calculate)

    const form = document.querySelector('#form')
    form.addEventListener('submit', (e) => e.preventDefault())
}

const calculate = () => {
    
    document.getElementById("form").reset()
}