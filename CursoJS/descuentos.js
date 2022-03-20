/* const precioOriginal = 120;
const descuento =18;
 */
function calcularPrecioConDescuento (precio, descuento){
    const porcentajePreciocConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePreciocConDescuento/100 );

    return precioConDescuento;
}

const cupones = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
]
function onClickButtonPriceDiscount (){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCupon = document.getElementById("InputCupon");
    const cuponValue = inputCupon.value;

    let descuento;
    switch (cuponValue){
        case cupones[0]:
            descuento = 15;
            break;
        case cupones[1]:
            descuento = 30;
            break;
        case cupones[2]:
            descuento = 25;
            break;            
    }


    const precioConDescuento = calcularPrecioConDescuento (priceValue, descuento);
    const resultP = document.getElementById("ResultP");

    resultP.innerText = "el precio con descuento son: $" + precioConDescuento;
}

/* console.log ({
    precioOriginal,
    descuento,
    porcentajePreciocConDescuento,
    precioConDescuento,
}); */

