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
    encargadosSinPaseo(){
        let encargadosQueNoEstanEnLaListaDePasosPorqueNoTienenPaseosAsignados = [];
        for (let i = 0; i < this.listaEncargados.length; i++){
            

            for(let j = 0; j < this.listaPaseos.length; j++){
                if(this.listaEncargados[i].nombre !== this.listaPaseos[j].encargado) {
                    encargadosQueNoEstanEnLaListaDePasosPorqueNoTienenPaseosAsignados.push(this.listaEncargados[i])
                }
            }
        }
        return encargadosQueNoEstanEnLaListaDePasosPorqueNoTienenPaseosAsignados;
    }    

}

class Paseo{
    constructor(dia, barrio, descripcion,
    encargado){
        // el dia va de 1 a 31
        // el barrio de 1 a 10
        this.dia = dia;
        this.barrio= barrio ;
        this.descripcion= descripcion;
        this.encargado=encargado;
        //objeto encargado
    }
}

class Encargado{
    constructor(nombre, edad){
        this.nombre= nombre;
        this.edad= edad;
    }
}


   