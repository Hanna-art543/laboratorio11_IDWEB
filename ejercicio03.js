//Contador de números pares
let contPares = 0;
//Contador de números impares
let contImpares = 0;

// Solicitar 10 números
for (let i = 0; i < 10; i++){
    let num = parseInt(prompt("Ingrese #"+(i+1)));

    if(num % 2 === 0){
        contPares ++;
    }
    else {
        contImpares++;
    }
}

//Mostrar resultados
alert("Resultados \nNúmeros pares: "+contPares+" \nNúmero impares: "+contImpares);

