//Simulador de carrito con presupuesto
alert("Bienvenido al simulador de carrito con presupuesto.");

//Ingresar presupuesto
let presupuesto = parseFloat(prompt("Ingrese su presupuesto total:"));

if (isNaN(presupuesto) || presupuesto <= 0) {
    alert("Presupuesto no válido. El programa finalizará.");
} else {
    let total = 0;
    let continuar;
    let contadorProductos = 0;

    do {
        let precio = parseFloat(prompt("Ingrese el precio del producto:"));

        if (isNaN(precio) || precio <= 0) {
            alert("Precio inválido. Intente nuevamente.");
        } else {
            //Verificar si el producto cabe en el presupuesto
            if (total + precio > presupuesto) {
                alert(
                    "No puede agregar este producto, excede su presupuesto.\n" +
                    "Presupuesto restante: $" + (presupuesto - total).toFixed(2)
                );
            } else {
                total += precio;
                contadorProductos++;
                alert("Producto agregado. Total actual: $" + total.toFixed(2));
            }
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

    //Total final
    let totalFinal = total - descuento;

    //Mostrar resumen final
    alert(
        "Resumen de compra:\n" +
        "Productos agregados: " + contadorProductos +
        "\n" + mensaje +
        "\nDescuento aplicado: $" + descuento.toFixed(2) +
        "\nTotal final a pagar: $" + totalFinal.toFixed(2) +
        "\nPresupuesto restante: $" + (presupuesto - totalFinal).toFixed(2)
    );
}

