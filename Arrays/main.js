/*
    1) Dado un array y un valor, implementar una función que retorne el número más cercano al valor dado. El más cercano puede ser un valor superior o inferior. Si hubiera más de un posible resultado, retornar cualquiera de ellos.
    
    Ejemplo: datos: 10 18 23 4 -5 50 , valor: 19, el más cercano es 18

    To resolve this exercise we could subtract the target wuth each character, because as lower the result is closer is the number with the target
*/

function value (data, target ) {

    let result = 0

    for (let i = 0; i < data.length; i++) {
        if (Math.abs(data[i] - target) < Math.abs(result - target)){
            result = data[i]
        }
    }
    return result
}

const data = [10, 90, 18, 23, 4, -5, 50]
const target = 21
const result = value(data, target)

// console.log(result)
// ------------------------------------------------------------------------

/*
    2) Escribir un programa que muestre el día actual y la hora en el siguiente formato: Día Actual: Domingo Hora: 10:45
    
    Nota: investigar Date, getDay(), getHours(), getMinutes()
*/

function date () {

    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

    const now = new Date()

    const day = days[now.getDay()]
    const H = now.getHours()
    const M = now.getMinutes()

    if ( M < 10 ) {
        M = `0${M}`
    }

    return `Current Day: ${day}, Time: ${H}:${M}`
}

// const showDate = date()
// console.log(showDate)
// ------------------------------------------------------------------------

/*
    3) Escribir una función que reciba un array cargado con números y retorne verdadero si
    dichos números ya están ordenados en forma estrictamente ascendente.

    We subtract in the iteration because of we compare unitl i + 1
*/

function checkOrder (data) {

    for (let i = 0; i < data.length - 1; i++){
        if(data[i] > data[i + 1]){
            
            return "Array desordenado" + ". " + false
        }
    }
    return "Array ordenado" + ". " + true
}
 
const arr = [0, 1, 2, 5, 3, 42, 5]
// console.log(checkOrder(arr))
// ------------------------------------------------------------------------
/*
    4) Se tiene una caja fuerte rodeada de 100 sensores de alarma. Cada sensor puede estar
    prendido o no. Implementar una función que recibe el array con la información de los
    sensores y retorna la cantidad de sensores que cumplen que él y sus dos vecinos están
    prendidos
    
    Ejemplo con 10 sensores: (true, true, false, true, true, true, true, true, false, true), retorna 4
*/

function sensor (data) {

    let counter = 0

    for (let i = 0 ; i < data.length - 2; i++){
        if (data[i] === true && data[i + 1] === true && data[i + 2] === true){
            counter++
        }
    }
    if ( data[data.length - 1] === true && data[0] === true && data[1] === true ) {
        counter++
    }
    if ( data[data.length - 2] === true && data[data.length - 1] === true && data[0] === true ) {
        counter++
    }

    return counter

}

const sensors = [true, true, false, true, true, false, true, true, true] // return 4
// console.log(sensor(sensors))
// ------------------------------------------------------------------------
/*
    5) Para poner moquette en una habitación rectangular se pueden combinar distintos
    recortes. Se tienen varios trozos rectangulares. De cada uno se sabe largo y ancho. Esa
    información está en un array.

    Ej. 2 4 1 3 5 6 son 3 trozos (de 2*4, 1*3 y 5*6, totalizando 41 m2).
    Implementar una función que reciba el array y el tamaño de la habitación y retorne si la
    cubre o no.
*/

function floor (room, moquette) {

    let total = 0
    for (let i = 0; i < moquette.length; i++) {
        
        total += moquette[i]
        
    }

    if ( total >= room ) {
        return `Podemos cubrir. \nTotal de moquette: ${total}\nPiso: ${room}`
    }
    

    return `No podemos cubrir todo. \nTotal de moquette: ${total}\nPiso: ${room}\nFaltan: ${room - total}`

}

const room = 45
const moquette = [2*4, 1*3, 5*6]
// console.log(floor(room, moquette))