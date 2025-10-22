//Mostrar las indicaciones
alert("El programa se ejecutará de manera indefinida "+
    "\npara salir del bucle escribe -1.")

//Crear un bucle para que sea iterativo
while(true) {
    let monto = parseDouble(prompt("Ingrese el monto:"));

    if (monto == -1){
        break;
    }

    let contador100 = 0;
    let contador50 = 0;
    let contador20 = 0;
    let contador10 = 0;

    let residuo = monto;

    while (residuo > 0){
        contador100 = Math.trunc(monto/100);
        residuo = monto % 100;
        contador50 = Math.trunc(residuo/50);
        residuo = residuo % 50;
        contador20 = Math.trunc(residuo/20);
        residuo = residuo % 20;
        contador10 = Math.trunc(residuo/10);
        residuo = monto % 10;
    }

    //Mostrar resultados 
    alert("Resultados \nBilletes de 100: "+contador100+
        "\nBilletes de 50: "+contador50+
        "\nBilletes de 20: "+contador20+
        "\nBilletes de 10: "+contador10)
}