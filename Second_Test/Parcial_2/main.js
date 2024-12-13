/*
1) (8 puntos)
Una dieta saludable sugiere ingerir diariamente entre 1700 y 2350 calorías (ambos topes incluidos). Dado un
array con las calorías consumidas cada día de una semana por una persona, implementar una función en JS
que recibe el array y devuelve un nuevo array indicando cada valor y el nivel de consumo diario respectivo:

“Inferior”, “Adecuado”, “Superior”. Además la función muestra con alert la palabra “saludable” si 4 días
cualquiera o más consumió un nivel adecuado de calorías o “no saludable”, en caso contrario.

Ejemplo:
firma: function alimentacion(calorias)
recibe: [1700, 1650, 2100, 2000, 2300, 2700, 2351]
Retorna: [1700, "Adecuado", 1650, "Inferior", 2100, "Adecuado", 2000, "Adecuado", 2300,
"Adecuado" , 2700, "Superior", 2351, "Superior"]
Muestra: “saludable”
*/
const caloriasArray = [2100, 2000, 2300, 11, 11, 11, 11, 11];

function alimentacion(calorias) {

    let caloriasLevel = [];
    let saludable = 0;
    let noSaludable = 0;

    for (let i = 0; i < calorias.length; i++) {
        if (calorias[i] < 1700) {
            caloriasLevel.push(calorias[i], "Inferior");
            noSaludable++;
        } else if (calorias[i] >= 1700 && calorias[i] <= 2350) {
            caloriasLevel.push(calorias[i], "Adecuado");
            saludable++;
        } else {
            caloriasLevel.push(calorias[i], "Superior");
        }
    }

    if (saludable >= 4) {
        console.log("saludable");
    } else if (noSaludable >= 4) {
        console.log("no saludable");
    }

    return caloriasLevel;

}

// console.log(alimentacion(caloriasArray));


// EJERCICO 2
 
/*

    Dados dos arrays con números, se desea verificar si todos los números del primero están contenidos
    exactamente una vez en el segundo, en el mismo orden. Se asume que el 1er array no tiene repetidos.
    Implementar una función en JS que reciba ambos array y retorne true si se cumple o false en otro caso.
    firma: function cumple(datos1, datos2)
    
    Ejemplos:
    recibe: [2, 5, 13], [10, 2, 6, 5, 13, 3] retorna true
    recibe: [21, 5, 13, 1, 2], [5] retorna false
    recibe: [3, 10, 4], [7, 10, 4, 3] retorna false
    recibe: [3, 10, 4], [1, 3, 10, 5, 4, 6, 4] retorna false


*/

const testFirst = [2, 5, 13, 1]
const testSecond = [10, 2, 1,  6, 9,  5, 13, 3, 9]

function compareArrays(first, second) {
    
    let j = 0;
    
    for (let i = 0; i < second.length; i++) {
        if (second[i] === first[j]) {
            j++;
        }

        if (j === first.length) {
            return true;
        }
    }

    return false;

}
// console.log(compareArrays(testFirst, testSecond));





// EJERCICIO 3

/*
    3a) En la clase Sistema, implementar el método ingredientesUtilizados(), que retorna
    un array con todos los ingredientes que son utilizados por al menos alguna receta. No repetir ingredientes.

    3b) Al presionar el botón idBoton, se verifica cuál radio botón está seleccionado y debe
    cargarse en la lista los nombres de las recetas del tipo indicado  ordenadas alfabéticamente por nombre.
    Si no hay ninguna receta a mostrar, en la lista poner "Sin datos". 

        
    3c)  Al presionar el botón idBoton, se verifica cuál radio botón está seleccionado y debe
        cargarse en la lista los nombres de las recetas del tipo indicado ordenadas alfabéticamente por nombre.
        Si no hay ninguna receta a mostrar, en la lista poner "Sin datos".
        En el archivo fuentes.js se tiene:
        window.addEventListener("load",inicio);
        let sistema = new Sistema(); // contiene la instancia de Sistema
        function inicio(){
        document.getElementById("idBoton").addEventListener("click", proceso);
        }
        
        parte 3c)
        function proceso(){
         codigo a completar

*/


class Sistema{
    constructor(){
    this.listaRecetas = [];
    this.listaIngredientes =[];
    }
   // pedido 3ª

    ingredientesUtilizados() {

        let ingredientesUsados = [];

        for (let receta of this.listaRecetas) {
           
            for (let ingrediente of receta.ingredientes) {
                if (!ingredientesUsados.includes(ingrediente.nombre)) {
                    ingredientesUsados.push(ingrediente.nombre);
                }
            }
        }

        return ingredientesUsados
    }
}

class Ingrediente {
    constructor(nombre, descripcion){
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
}
    
class Receta{
    constructor(nombre, ingredientes, pasos, tipo){
        this.nombre=nombre;
        this.ingredientes = ingredientes; //lista objetos Ingrediente
        this.pasos = pasos; 
        this.tipo = tipo;
    }
}

// Datos de prueba:

const sistema = new Sistema();

const ingrediente1 = new Ingrediente("Harina", "Harina de trigo");
const ingrediente2 = new Ingrediente("Levadura", "Levadura fresca");
const ingrediente3 = new Ingrediente("Azucar", "Azucar blanca");
const ingrediente4 = new Ingrediente("Sal", "Sal fina");
const ingrediente5 = new Ingrediente("Balas", "Balas del renzo")

const receta1 = new Receta("Pan", [ingrediente1, ingrediente2, ingrediente4], ["Paso 1", "Paso 2"], "Salado");
const receta2 = new Receta("Torta", [ingrediente1, ingrediente3], ["Paso 1", "Paso 2"], "Dulce");
const receta3 = new Receta("Pizza", [ingrediente1, ingrediente2, ingrediente3, ingrediente4], ["Paso 1", "Paso 2"], "Salado");
const receta4 = new Receta("Galletas", [ingrediente1, ingrediente4], ["Paso 1", "Paso 2"], "Dulce");
const receta5 = new Receta("Chocolate", [ingrediente1, ingrediente4], ["Paso 1", "Paso 2"], "Dulce");

sistema.listaIngredientes.push(ingrediente1, ingrediente2, ingrediente3, ingrediente4);
sistema.listaRecetas.push(receta1, receta2, receta3, receta4, receta5);


// console.log(sistema.listaRecetas)
// console.log(sistema.listaIngredientes)

// console.log(sistema.ingredientesUtilizados())




window.addEventListener("load",inicio);
// let sistema = new Sistema(); // contiene la instancia de Sistema

function inicio(){
    document.getElementById("btn").addEventListener("click", proceso);
}



// parte 3c)

function ordenar (arrary) {
    return arrary.sort((a, b) => {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0 
    })
}

function proceso(){

    const inputDulce = document.getElementById("dulce").checked
    const inputSalado = document.getElementById("salado").checked

    const lista = document.getElementById("listaReceta")

    lista.innerHTML = ''

    const recetasDulces = []
    const recetasSaladas = []

    for (let recetaTipo of sistema.listaRecetas) {
        if (recetaTipo.tipo === "Salado") {
            recetasSaladas.push(recetaTipo.nombre)
        }

        if (recetaTipo.tipo === "Dulce") {
            recetasDulces.push(recetaTipo.nombre)
        }
    }

    if (inputDulce) {
        const ordered = ordenar(recetasDulces) 

        for (let i = 0; i < ordered.length; i++){
            const li = document.createElement("li")
            li.innerHTML = ordered[i]
            lista.appendChild(li)
        }
    }

    if (inputSalado) {

        const ordered = ordenar(recetasSaladas) 

        for (let i = 0; i < ordered.length; i++){
            const li = document.createElement("li")
            li.innerHTML = ordered[i]
            lista.appendChild(li)
        }
    }
}