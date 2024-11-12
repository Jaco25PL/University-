
class Dot {

    constructor (valueX, valueY) {
        this.valueX = valueX
        this.valueY = valueY
    }

    addition ( plus ) {
        return new Dot(
            this.valueX + plus.valueX,
            this.valueY + plus.valueY
        )
    }
}

const dot1 = new Dot(10, 20) // This save an object with the key valueX and value 10, the same for valueY: 20
const dot2 = new Dot(40, 50)

const dot3 = dot1.addition(dot2)

// When we run the addition method over dot1, we are "using" the constructor so we've access to 'this'
// Then the dot2 is passed as paramteres so we get the values (x , y) from there

console.log(dot3)

const showResult = () => {
    const main = document.getElementById("main")
    const div = document.createElement("div")

    div.innerHTML = `
        <ul>
            <li>dot1: ${JSON.stringify(dot1)}</li>
            <li>dot2: ${JSON.stringify(dot2)}</li>
            <li></li>
            <li>dot3: ${JSON.stringify(dot3)}</li>
        </ul>  
        

    `
    main.appendChild(div)
}

showResult()