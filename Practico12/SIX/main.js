
class BankAccount {

    constructor (name, balance) {
        this.name = name
        this.balance = balance
    }

    deposit (amount) {
        this.balance += amount
    }

    toString () {
        return `Account owner: ${this.name} - Available balance: ${this.balance}`
    }
}

const user1 = new BankAccount("Sofia Santander", 250)
const user2 = new BankAccount("Joaquin Piedra", 1500)

user1.deposit(200)

console.log(`${user1}\n${user2}`)


const main = document.getElementById("main")

const showResult = () => {
    const span = document.createElement("span")
    span.innerHTML = `
        <ul>
            <li>${user1} <span style="font-style: italic;">(With a $200 deposit)</span></li>
            <li>${user2}</li>
        </ul>
    `
    main.appendChild(span)
}

showResult()