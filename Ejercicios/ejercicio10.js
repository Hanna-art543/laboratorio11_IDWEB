//Indicar las reglas e indicaciones
alert("Este programa nos ayudará a calcular estadísticas de N notas," 
    +"contar números y generar una tabla.");

//Generar bucle
while(true) {
    let opcion = parseInt(prompt(
        "Opciones:" +
        "\n1. Calcular estadísticas de N notas." +
        "\n2. Contar números pares e impares en un rango." +
        "\n3. Generar una tabla de multiplicar." +
        "\n4. Salir."
    ));

    if(opcion === 4) {
        alert("Gracias por usar el programa.");
        break;
    }
    switch (opcion) {
        case 1:
            let numNotas = parseInt(prompt("Ingresa el número de notas:"));

            if(isNaN(numNotas) || numNotas <= 0) {
                alert("Número no válido, debe ser mayor a 0.");
                break;
            }

            let notas = [];
            for(let i=0; i < numNotas; i++) {
                let nota = parseFloat(prompt("Ingrese la nota #"+(i+1)));
                notas.push(nota);
            }

            let suma = 0;
            for(let i of notas) {
                suma += i;
            }

            //Promedio
            let promedio = suma / notas.length;

            //Nota mínima y máximo
            let notaMax = Math.max(...notas); //spread
            let notaMin = Math.min(...notas); //spread

            //Cantidad de pares e impares
            let pares = 0;
            let impares = 0;
            for(let num of notas) {
                if(num % 2 == 0) {
                    pares++;
                }
                else {
                    impares++;
                }
            }
            //Cantidad de números por encima del promedio
            let cantidadEncimaPromedio = 0;
            for(let cantidad of notas) {
                if(cantidad > promedio) {
                    cantidadEncimaPromedio++;
                }
            }

            alert(
                "Estadísticas:" +
                "\nPromedio: " + promedio.toFixed(2) +
                "\nValor máximo: " + notaMax +
                "\nValor mínimo: " + notaMin +
                "\nCantidad de pares: " + pares +
                "\nCantidad de impares: " + impares +
                "\nNotas por encima del promedio: " + cantidadEncimaPromedio
            );
            break;

        case 2:
            let inicio = parseInt(prompt("Ingrese el número inicial del rango:"));
            let fin = parseInt(prompt("Ingrese el número final:"));

            if (isNaN(inicio) || isNaN(fin) || inicio > fin) {
                alert("Rango inválido.");
                break;
            }

            //Contador de pares e impares
            let paresR = 0, imparesR = 0;
            for (let i = inicio; i <= fin; i++) {
                if (i % 2 === 0) paresR++;
                else imparesR++;
            }

            alert(
            "En el rango de " + inicio + " a " + fin + ":" +
            "\nPares: " + paresR +
            "\nImpares: " + imparesR
            );
            break;
        
        case 3:
            let numTabla = parseInt(prompt("Ingrese el número para la tabla:"));

            if(isNaN(numTabla) || numTabla <= 0) {
                alert("El número no es válido.");
                break;
            }

            let tabla = "Tabla de multiplicar \n";
            for(let i = 1; i <= 12; i++) {
                tabla += numTabla + " x "+ i + " = "+(numTabla * i) + "\n";
            }
            alert(tabla);
            break;

        default:
        alert("Opción no válida, intenta de nuevo.");
    }
}

