function inicio() {
    var elemento1 = document.getElementById("inicio");
    var elemento2 = document.getElementById("hoy");
    var ma1 = document.getElementById("main1");
    var ma2 = document.getElementById("main2");
    if (elemento1.className == "rows pestaña inactivo") {
      elemento1.className = "rows pestaña activo";
      elemento2.className = "rows pestaña inactivo";
      ma1.className = "rows cuadricula ver";
      ma2.className = "rows cuadricula nover";
    }
}

function hoy() {
    var elemento2 = document.getElementById("inicio");
    var elemento1 = document.getElementById("hoy");
    var ma1 = document.getElementById("main1");
    var ma2 = document.getElementById("main2");
    if (elemento1.className == "rows pestaña inactivo") {
      elemento1.className = "rows pestaña activo";
      elemento2.className = "rows pestaña inactivo";
      ma1.className = "rows cuadricula nover";
      ma2.className = "rows cuadricula ver";
    }
}