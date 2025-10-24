//Indicar reglas y como salir del bucle
alert("Este programa calcula los número primos, desde 1 hasta"
    +" \nel número que usted indique. Para salir, escriba -1."
)

//Generar un bucle
while(true) {
    //Ingresar el número n para hacer generar primos del 1-n
    let maxNum = parseInt(prompt("Ingresar número máximo:"));

    if (maxNum === -1) {
        break;
    }

    if (isNaN(maxNum) || maxNum < 2) {
        alert("Ingrese un número válido mayor o igual a 2.");
        continue;
    }

    let resultado = "";

    for (let num = 2; num <= maxNum; num++) {
        let esPrimo = true;

        for(let i = 2; i < Math.sqrt(num); i++) {
            if(num % i == 0) {
                esPrimo = false;
                break;
            }
        }

        if (esPrimo) {
            resultado += num+ " ";
        }
    }

    alert("Números primos hasta " + maxNum + ":\n" + resultado);
}