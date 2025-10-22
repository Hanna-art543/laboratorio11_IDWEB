let sumaTotal = 0; //Inicializamos la suma

//Ingresar 5 notas 
for (let i=0; i < 5; i ++){
    let nota = parseFloat(prompt("Ingrese la nota #"+(i+1)));
    if (nota >=0 && nota <= 20){
        sumaTotal +=nota;
    }
    else {
        alert("Nota no válida, debe estar entre 0-20.");
        i--;
    }
}

//Calcular promedio
let promedio = sumaTotal / 5;

//Mostrar los resultados
alert("Promedio final: "+promedio);

