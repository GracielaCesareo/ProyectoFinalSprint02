
function agregarLista() {
  var titulo = document.getElementById("nuevaLista").value;
  var nombreTitulo = docum.createElement("H3");
}

function agregarElemento() {
  var lista = document.getElementById("lista");
  var elemento = document.createElement("LI");
  var texto = document.createTextNode(document.getElementById("nuevoPendiente").value);

  elemento.appendChild(texto);
  lista.appendChild(elemento);
}
