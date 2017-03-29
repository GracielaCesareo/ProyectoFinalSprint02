//Esta función cambia el titulo de la lista
function cambiarTitulo() {
  var anterior = document.getElementById("titulo");
  var nombreLista = document.getElementById("nuevaLista").value;
  var nombreTitulo = anterior.innerHTML = (nombreLista);
}

//Esta funcion crea la lista y agrega elementos
function crearLista() {
  var nuevaLista = document.getElementById("listas");
  var otraLista = document.createElement("UL");
  var lista = document.getElementById("lista");
  var elemento = document.createElement("LI");
  var texto = document.createTextNode(document.getElementById("nuevoPendiente").value);

  nuevaLista.appendChild(otraLista);
  elemento.appendChild(texto);
  otraLista.appendChild(elemento);
}

//Esta funcion elimina los pendientes de la lista
function eliminarPendientes() {
  var seccion = document.getElementById("listas");

  if (seccion.hasChildNodes()) {
      seccion.removeChild(seccion.childNodes[3]);
  }
}

//Aquí abajo traté de resolver el programa con POO

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
