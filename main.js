
function agregarLista() {
  var seccion = document.getElementById("listas");
  var crearTitulo = document.createElement("H3");
  var titulo = document.getElementById("nuevaLista").value;
  var nombreTitulo = document.createTextNode(titulo)

  seccion.appendChild(crearTitulo);
  crearTitulo.appendChild(nombreTitulo)

  var listaNueva = document.createElement("UL");
  seccion.appendChild(listaNueva);

}

function crearBotonElementos() {
  var seccion = document.getElementById("listas")
  var boton = document.createElement("BUTTON")
  var nombreBoton = document.createTextNode("Agregar pendientes");
  var input = document.createElement("INPUT");
  seccion.appendChild(input);
  seccion.appendChild(boton);
  boton.appendChild(nombreBoton);
}

/*function agregarElemento() {
  var lista = document.getElementById("lista");
  var elemento = document.createElement("LI");
  var texto = document.createTextNode(document.getElementById("nuevoPendiente").value);

  elemento.appendChild(texto);
  lista.appendChild(elemento);
}*/
