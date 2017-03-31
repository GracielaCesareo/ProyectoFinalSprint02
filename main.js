function agregarLista(){
//Crea una seccion a partir de la accion del input "nombreLista" y la asigna al elemento article
   var nuevaLista = document.getElementById("nuevaLista");
   var seccion = document.createElement("section");
   seccion.id = Date.now();
   document.getElementById("contenedorListas").appendChild(seccion);

//Crea la lista y la agrega a la division
   var lista  = document.createElement("ul");
   var titulo = document.createElement("h3")
   titulo.id =Date.now();
   lista.id = Date.now();
   seccion.appendChild(lista);
   lista.innerHTML = nuevaLista.value + " " + "<button onclick='eliminar(this)'>x</button>";

//Crea el input para tomar el valor de cada pendiente
   var contenidoDelPendiente = document.createElement("input");
   contenidoDelPendiente.setAttribute("type","text");
   seccion.appendChild(contenidoDelPendiente);

//Crea el boton para agregar cada pendiente
   var nuevoPendiente = document.createElement("input");
   nuevoPendiente.setAttribute("type","button");
   nuevoPendiente.setAttribute("value","Crear pendiente");
   seccion.appendChild(nuevoPendiente);

//Funcion para crear cada elemento de la lista
   nuevoPendiente.onclick = function(){
                           var elementoLista= document.createElement("li");
                           elementoLista.id = Date.now();
                           lista.appendChild(elementoLista);
                           elementoLista.innerHTML=contenidoDelPendiente.value + " " + "<button onclick='eliminar(this)'>x</button>";
   }
}

 //Esta funcion elimina los pendientes y la lista
function eliminar(elemento) {
       var id = elemento.parentNode.getAttribute("id"); //"elemento" es el span, reconoce el id del padre
       node = document.getElementById(id);//otorga mismo id al elemento creado y al span
       node.parentNode.removeChild(node);//
}
