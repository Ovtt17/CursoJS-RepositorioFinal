/* const precioOriginal = 120;
const descuento =18;
 */
function calcularPrecioConDescuento (precio, descuento){
    const porcentajePreciocConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePreciocConDescuento/100 );
    return precioConDescuento;
}

/* console.log ({
    precioOriginal,
    descuento,
    porcentajePreciocConDescuento,
    precioConDescuento,
}); */

