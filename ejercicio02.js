// Solicitar la edad al usuario
let edad = parseInt(prompt ("Ingrese su edad:"));

// Utilizar una condicional según el rango de edad
if (edad < 12) {
    alert("Niño :)");
}

else if (edad >= 12 && edad <= 17 ) {
    alert ("Adolescente :D")
}

else if (edad >= 18  && edad < 60) {
    alert ("Adulto");
}

else {
    alert("Adulto mayor");
}

