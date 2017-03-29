function agregarLista() {
  var anterior = document.getElementById("titulo");
  var nombreLista = document.getElementById("nuevaLista").value;
  var nombreTitulo = anterior.innerHTML = (nombreLista);

  var seccion = document.getElementById("listas");
  var listaNueva = document.createElement("UL");
  seccion.appendChild(listaNueva);

}

function agregarElemento() {
  var elemento = document.createElement("LI");
  var texto = document.createTextNode(document.getElementById("nuevoPendiente").value);

  elemento.appendChild(texto);
  lista.appendChild(elemento);
}
