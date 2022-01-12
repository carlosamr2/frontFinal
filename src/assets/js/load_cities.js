var opciudades = document.getElementById("ciudad");

window.onload = async function mostrarCiudades() {
    const respuesta = await fetch('/assets/json/provincias.json');
    const data = await respuesta.json()
    var texto = "";
    var tamaño = Object.values(data).length;
    for (var i = 0; i < tamaño; i++) {
        texto = texto + "<option value='" + data[i] + "'>" + data[i] + "</option>"
    }
    opciudades.innerHTML = texto;
}

//Existe algo en javascript llamado event propagation
//Que un evento puesto en un atributo padre, se va a propagar
//hasta el último de sus hijos.
//Entonces para evitar esto, podemos hacer dos cosas.
//Al select ponerle el onclick como evento aquí. Es decir, asignarle desde el código el evento o hacer que se carguen todas las ciudades apenas se carga la página.
//¿Cómo funciona tu lógica de negocios?

//window.addEventListener("load", mostrarCiudades());


