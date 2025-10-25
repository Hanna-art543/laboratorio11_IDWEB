//Indicar las reglas y como salir del bucle
alert("Este programa calcula la suma desde 1 hasta el número que usted indique"
    +" \nexceptuando los múltiplos de 5. Para salir, escriba -1.");

//Generar el bucle
while (true) {
    //Ingresar el número máximo
    let numMax = parseInt(prompt("Ingrese el número máximo:"));

    if (numMax === -1) {
        break; //romper bucle
    }

    if(isNaN(numMax) || numMax <= 0) {
        alert("Número no válido debe ser mayor a 0.")
    }
    let sumaTotal = 0;

    for (let i=1; i <= numMax; i++) {
        if (i % 5 === 0) {
            continue;
        }
        else {
            sumaTotal += i;
        }
    }
    alert("La suma total es: "+sumaTotal);
}
