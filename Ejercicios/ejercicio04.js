//Mostrar las indicaciones
alert("El programa se ejecutará de manera indefinida "+
    "\npara salir del bucle escribe -1.")


//Establecer un bucle para que sea iterativo
while (true) {
    let numero = parseInt(prompt("Ingresa un número:"));

    if(numero == -1){
        break; // Rompe el bucle
    }

    let cadena = "";
    //Mostrar la tabla de multiplicar
    for(let i = 1; i <= 12; i++){
        cadena += numero +"*"+ (i)+" = "+(numero*i)+"\n";
    }
    alert(cadena);

}

