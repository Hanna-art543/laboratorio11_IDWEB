// Indicar como salir del bucle y el programa
alert("Este programa es un menú de opciones, se saldrá del programa cuando lo indique.");

//Generar un bucle para que sea iterativo
while (true) {
    //Opciones
    let opcion = parseInt(prompt("Opciones: "+
        "\n1. Calcular área del círculo"+ "\n2. Calcular área del rectángulo"
    +"\n3. Salir"));

    switch (opcion) {
        case 1: 
            let radio = parseFloat(prompt("Ingresar el radio:"));
            //Verificar
            if(isNaN(radio) || radio <= 0) {
                break;
            }
            else {
                let area = Math.PI * radio;
                alert("El área del circulo: "+area);
            }
            break;

        case 2:
            let base = parseFloat(prompt("Ingresar la base:"));
            let altura = parseFloat(prompt("Ingresar altura:"));

            if(isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
                alert("Ingrese datos válidos.");
            }
            else {
                let area = base * altura;
                alert("El área del rectángulo es: "+area);
            }
            break;

        case 3:
            alert("Gracias por usar el programa.");
            break;

        default:
            alert("Opción inválida.");
    }

    if(opcion === 3) {
        break;
    }

}

