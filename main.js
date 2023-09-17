
let opcionProducto = true

function compraProducto(){
    do {
        opcionProducto = parseInt(prompt("¿Qué producto quieres comprar hoy? (ingresa el número de la opción) \n \n Tus opciones son: \n \n 1) Limpiadora \n 2) Tónico \n 3) Mascarilla \n 4) Serúm \n 5) Hidratante "))
        //alert("Elegiste el producto: " + opcionProducto)

        if (opcionProducto === 1) {
            alert("Elegiste el producto: " + opcionProducto + " - limpiadora. \n ¡Gracias por tu compra!")
        }else if (opcionProducto === 2) {
            alert("Elegiste el producto: " + opcionProducto + " - tónico. \n ¡Gracias por tu compra!")
        }else if (opcionProducto === 3) {
            alert("Elegiste el producto: " + opcionProducto + " - mascarilla. \n ¡Gracias por tu compra!")
        }else if (opcionProducto === 4) {
            alert("Elegiste el producto: " + opcionProducto + " - serum. \n ¡Gracias por tu compra!")
        }else if (opcionProducto === 5) {
            alert("Elegiste el producto: " + opcionProducto + " - hidratante. \n ¡Gracias por tu compra!")
        }else {
            alert("Ingresaste un valor no válido o un producto que no existe.")
        }

        let otroProducto = window.confirm("¿Quieres añadir otro producto?")
        if (otroProducto == false) {
            alert("¡Esperamos verte pronto!")
            break
        }

    }while(parseInt(opcionProducto))
}

compraProducto()


