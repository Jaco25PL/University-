/*
1) (6 puntos)
Un array es perfecto si la suma de los elementos de posición par es igual a la suma de los elementos
de posicion impar. Por error, se ha borrado un elemento del array y se desea agregar al principio un
nuevo número de forma que se obtenga un array perfecto nuevamente. Implementar una función en JS
que reciba el array (sin el elemento borrado) y retorne el número a agregar al principio.

Ejemplos
Recibe: [1 , 2 , 3 , 4], debe retornar el valor -2
Recibe: [6 ,1 ,2], debe retornar el valor 7.

*/

function arrayPerfecto(array) {
    let sumaPares = 0;
    let sumaImpares = 0;

    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            sumaPares += array[i];
        } else {
            sumaImpares += array[i];
        }
    }

    return sumaPares - sumaImpares;
}

// const test = [1 , 2 , 3 , 4];
// console.log(arrayPerfecto(test));

// -----------------------------------------------


/*
Se tiene un array con resultados de muestras de laboratorio. 

El formato es:
número de laboratorio cantidad de muestras resultados de cada muestra
Ej. 10 2 100 90 1 3 40 20 15 10 1 50
corresponde a las muestras de: el laboratorio 10 tuvo 2 muestras (de resultados 100 y 90), el laboratorio
1 tuvo 3 muestras (de resultados 40, 20 y 15) y el laboratorio 10 tuvo otra muestra más (de resultado
50)

Implementar una función en JS que reciba el array (sin inconsistencias) y un número de laboratorio y
retorne el resultado promedio entre sus muestras. Si no hay datos, retorna "SIN DATOS".
Ej: recibe 10, retorna 80

*/

function resultadoPromedio(array, laboratorio) {
    let muestras = 0; 
    let muestrasNum = 0;

    for (let i = 0; i < array.length; i++) {
        
        if (array[i] == laboratorio) {
            let numMuestras = array[i + 1];

            for (let j = 0; j < numMuestras; j++) {
                let resultado = array[i + 2 + j];
                muestras += resultado;
            }

            muestrasNum += numMuestras;
        }
    }

    if (muestrasNum === 0) {
        return "SIN DATOS";
    }

    return muestras / muestrasNum;
}

// let test = [10, 2, 50, 50];
// console.log(resultadoPromedio(test, 10)); 

// --------------------------------------------------------------------------------

class Sistema{
    constructor(){
        this.listaPaseos = [];
        this.listaEncargados = [];
    }
    // pedido 3a
    encargadosSinPaseos() {
        let encargadosConPaseos = [];
        for (let i = 0; i < this.listaPaseos.length; i++) {
            const nombreEncargado = this.listaPaseos[i].encargado.nombre;
            if (!this.estaEnLista(encargadosConPaseos, nombreEncargado)) {
                encargadosConPaseos.push(nombreEncargado);
            }
        }

        let sinPaseos = [];
        for (let j = 0; j < this.listaEncargados.length; j++) {
            const encargado = this.listaEncargados[j];
            if (!this.estaEnLista(encargadosConPaseos, encargado.nombre)) {
                sinPaseos.push(encargado);
            }
        }

        // Ordenar de forma decreciente por nombre
        for (let k = 0; k < sinPaseos.length - 1; k++) {
            for (let l = k + 1; l < sinPaseos.length; l++) {
                if (sinPaseos[k].nombre < sinPaseos[l].nombre) {
                    let temp = sinPaseos[k];
                    sinPaseos[k] = sinPaseos[l];
                    sinPaseos[l] = temp;
                }
            }
        }

        return sinPaseos;
    }

    // Función auxiliar para buscar en una lista
    estaEnLista(lista, valor) {
        for (let i = 0; i < lista.length; i++) {
            if (lista[i] === valor) {
                return true;
            }
        }
        return false;
    }

}

class Paseo{
    constructor(dia, barrio, descripcion, encargado){
        // el dia va de 1 a 31
        // el barrio de 1 a 10
        this.dia = dia;
        this.barrio = barrio ;
        this.descripcion = descripcion;
        this.encargado = encargado;
    }
}

class Encargado{
    constructor(nombre, edad){
        this.nombre= nombre;
        this.edad= edad;
    }
}


let sistema = new Sistema();


// Parte 3c - Consulta de paseos por descripción
window.addEventListener("load", inicio);

function inicio() {
    document.getElementById("idConsulta").addEventListener("click", consulta);
}

function consulta() {
    const texto = document.getElementById("idTexto").value.toLowerCase();
    const listaPaseos = document.getElementById("listaPaseos");

    // Limpiar lista anterior
    listaPaseos.innerHTML = "";

    // Buscar paseos por descripción
    let resultados = [];

    for (let i = 0; i < sistema.listaPaseos.length; i++) {
        const paseo = sistema.listaPaseos[i];
        if (paseo.descripcion.toLowerCase().includes(texto)) {
            resultados.push(paseo);
        }
    }

    if (resultados.length === 0) {
        alert("No hay datos que coincidan con la búsqueda.");
    } else {
        for (let j = 0; j < resultados.length; j++) {
            const paseo = resultados[j];
            const li = document.createElement("li");
            li.textContent = `Día: ${paseo.dia}, Encargado: ${paseo.encargado.nombre}`;
            listaPaseos.appendChild(li);
        }
    }
}




// Datos de prueba
let encargado1 = new Encargado("Carlos", 35);
let encargado2 = new Encargado("Ana", 28);
let encargado3 = new Encargado("Luis", 40);
let encargado4 = new Encargado("María", 32);

sistema.listaEncargados.push(encargado1, encargado2, encargado3, encargado4);

let paseo1 = new Paseo(5, 3, "Recorrido histórico por el casco antiguo", encargado1);
let paseo2 = new Paseo(10, 7, "Tour gastronómico por el barrio", encargado2);
let paseo3 = new Paseo(15, 1, "Excursión al parque ecológico", encargado1);

sistema.listaPaseos.push(paseo1, paseo2, paseo3);