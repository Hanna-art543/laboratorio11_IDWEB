//Programa de carrito de compras
alert("Bienvenido al simulador de carrito de compras");

let total = 0;
let continuar;

//Bucle para agregar productos
do {
    let precio = parseFloat(prompt("Ingrese el precio del producto:"));

    if (isNaN(precio) || precio <= 0) {
        alert("Precio inválido. Intente nuevamente.");
    } else {
        total += precio;
    }

    continuar = prompt("¿Desea agregar otro producto? (s/n)").toLowerCase();
} while (continuar === "s");

//Mostrar total parcial
alert("Total parcial: $" + total.toFixed(2));

//Calcular descuento
let descuento = 0;
let mensaje = "";

if (total > 100) {
    descuento = total * 0.10;
    mensaje = "Tiene un descuento del 10%";
} else if (total >= 50 && total <= 100) {
    descuento = total * 0.05;
    mensaje = "Gana un cupón de 5%";
} else {
    mensaje = "No aplica descuento";
}

// Total final
let totalFinal = total - descuento;

// Mostrar resumen final
alert(
    mensaje +
    "\nDescuento aplicado: $" + descuento.toFixed(2) +
    "\nTotal final a pagar: $" + totalFinal.toFixed(2)
);

