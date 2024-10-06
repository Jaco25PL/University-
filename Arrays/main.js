/*
    1) Dado un array y un valor, implementar una función que retorne el número más cercano al valor dado. El más cercano puede ser un valor superior o inferior. Si hubiera más de un posible resultado, retornar cualquiera de ellos.
    
    Ejemplo: datos: 10 18 23 4 -5 50 , valor: 19, el más cercano es 18
*/

function value (data, number ) {


    return data + " & " + number
}

const data = [10, 18, 23, 4, -5, 50]

console.log(value(data, 19))