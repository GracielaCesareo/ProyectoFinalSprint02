function agregarLista() {
  var anterior = document.getElementById("titulo");
  var nombreLista = document.getElementById("nuevaLista").value;
  var nombreTitulo = anterior.innerHTML = (nombreLista);

  var seccion = document.getElementById("listas");
  var listaNueva = document.createElement("UL");
  seccion.appendChild(listaNueva);
  
}

function agregarElemento() {
  var lista = document.getElementById("lista");
  var elemento = document.createElement("LI");
  var texto = document.createTextNode(document.getElementById("nuevoPendiente").value);

  elemento.appendChild(texto);
  lista.appendChild(elemento);
}


//hacia abajo en este código traté de resolver el programa con POO
/*function ListaPendientes() {
  this.pendiente = pendiente;
}

var pendientes = [];

function nuevoPendiente() {
  var nuevo = document.getElementById("nuevoPendiente");

  var pendiente = new ListaPendientes(nuevo.value);

  pendientes.push(pendiente);
}

function lista() {
  var lista = document.getElementById("listas");
  var nuevaLista = document.createElement("ul");

  pendientes.forEach(function(pendiente){
    var item = document.createElement("li")
    item.innerText = elemPendiente.nombre;
  });
}*/
