function inicio() {
    var elemento1 = document.getElementById("inicio");
    var elemento2 = document.getElementById("hoy")
    if (elemento1.className == "pestaña inactivo") {
      elemento1.className = "pestaña activo";
      elemento2.className = "pestaña inactivo";
    }
}

function hoy() {
    var elemento2 = document.getElementById("inicio");
    var elemento1 = document.getElementById("hoy")
    if (elemento1.className == "pestaña inactivo") {
      elemento1.className = "pestaña activo";
      elemento2.className = "pestaña inactivo";
    }
}