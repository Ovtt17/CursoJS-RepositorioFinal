const precioOriginal = 100;
const descuento =15;

const porcentajePreciocConDescuento = 100 - descuento;

const precioConDescuento = (precioOriginal * porcentajePreciocConDescuento/100 );

console.log ({
    precioOriginal,
    descuento,
    porcentajePreciocConDescuento,
    precioConDescuento,
});