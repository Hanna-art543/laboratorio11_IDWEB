//Informar sobre el programa y dar indicaciones
alert("El siguiente programa verificará si el número es Armstrong."
    +"Para salir del programa ingrese -1."
);

//Generar un bucle
while(true) {
    let num = parseInt(prompt("Ingrese el número:"));

    if(num === -1) {
        break;
    }
    //Validar
    if(isNaN(num) || num <= 0) {
        alert("Número no válido, vuelva a ingresar.");
        continue;
    }

    let numCadena = num.toString();
    let numDigitos = numCadena.length;
    let sumaDigitos = 0;

    //Calcular la suma
    for (let i=0; i < numDigitos; i++) {
        let digito = Math.pow(parseInt(numCadena[i]), numDigitos);
        sumaDigitos += digito;
    }

    if(sumaDigitos === num) {
        alert("El número "+num+" es un número Armstrong.");
    }
    else {
        alert("No es un número Armstrong.");
    }

}

