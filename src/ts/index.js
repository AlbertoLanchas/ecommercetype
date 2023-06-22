"use strict";
//
console.log("hello from type");
document.addEventListener('DOMContentLoaded', () => {
    const carritoSpan = document.getElementById('carrito');
    const numeroCarrito = 5;
    if (carritoSpan) {
        carritoSpan.innerText = numeroCarrito.toString();
    }
});
