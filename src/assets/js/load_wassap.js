const tercerpaso = document.getElementById("tercerpaso");

const segundobotonsiguiente = document.getElementById("segundobotonsiguiente");

segundobotonsiguiente.onclick = function () {
    var cantidad1 = document.getElementById("cantidadproducto1");
    var totalproducto1 = document.getElementById("totalproducto1");
    var nombre1 = document.getElementById("nombreproducto1");
    var cadena1 = "<p>" + cantidad1.getAttribute("value") + " frascos de " + nombre1.innerHTML + " -> " + totalproducto1.innerHTML + "</p>";

    var cantidad2 = document.getElementById("cantidadproducto2");
    var totalproducto2 = document.getElementById("totalproducto2");
    var nombre2 = document.getElementById("nombreproducto2");
    var cadena2 = "<p>" + cantidad2.getAttribute("value") + " frascos de " + nombre2.innerHTML + " -> " + totalproducto2.innerHTML + "</p>";

    var total = document.getElementById("totalapagar");
    var cadenatotal = "<p>" + " El total de la compra sería -> " + total.innerHTML + "</p>";
    
    var nombre = document.getElementById("name");
    var correo = document.getElementById("email");
    var telefono = document.getElementById("telefono");
    var ciudad = document.getElementById("ciudad");
    var cadena3 = "Sus datos son : " + nombre.getAttribute("value") + " - " + correo.getAttribute("value") + " - " + telefono.getAttribute("value") + " - " + ciudad.getAttribute("value")

    tercerpaso.innerHTML = cadena1 + cadena2 + cadenatotal +cadena3;
}

