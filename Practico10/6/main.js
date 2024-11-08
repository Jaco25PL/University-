window.addEventListener('load', inicio);

let nombres = [];

function inicio(){
	document.getElementById("btn").addEventListener("click", proceso);
}

function proceso(){
	let nombre = document.getElementById("add_name").value;
	if (esNuevo(nombre)){
		agregarElementoEnLista(nombre);
		nombres.push(nombre);
	}
	else {
		alert("repetido!");
	}
    
}

function esNuevo(dato) {
	return !nombres.includes(dato);
}

function agregarElementoEnLista(texto){   
     let node = document.createElement("li");   
     let  textnode = document.createTextNode(texto); 
     node.appendChild(textnode);
     document.getElementById("list").appendChild(node);
}
