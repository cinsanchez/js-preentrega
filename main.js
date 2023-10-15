let opcionProducto = true
let tipoProducto = true

const botonCompra = document.getElementById("botonInicia")
botonCompra.addEventListener("click", compraProducto)

function Producto(id, tipo, marca, precio, stock){
    this.id = id
    this.tipo = tipo
    this.marca = marca
    this.precio = precio
    this.stock = stock
}

const producto1 = new Producto(1, "Limpiadora - Green Tea", "Instree", "13.500 CLP", 10)
const producto2 = new Producto(2, "Limpiadora - Pore Cleansing", "Hanskin", "21.520 CLP", 85)
const producto3 = new Producto(3, "Limpiadora - Natural coconut", "Aromatica", "19.120 CLP", 38)

const producto4 = new Producto(4, "Tónico - Hyaluronic Acid Toner", "Instree", "13.520 CLP", 15)
const producto5 = new Producto(5, "Tónico - Green Tea Toner", "Instree", "13.520 CLP", 69)
const producto6 = new Producto(6, "Tónico - Snail Repair", "Mizon", "7.900 CLP", 24)

const producto7 = new Producto(7, "Mascarilla - Good night White Sleeping Mask", "Mizon", "7.920 CLP", 59)
const producto8 = new Producto(8, "Mascarilla - Ultimate Nourishing Rice", "Cosrx", "17.520 CLP", 76)
const producto9 = new Producto(9, "Mascarilla - Clear Skin PHA", "Instree", "17.520 CLP", 34)

const producto10 = new Producto(10, "Serúm - Power 10 Formula", "It's skin", "14.320 CLP", 15)
const producto11 = new Producto(11, "Serúm - C-Niacin", "Instree", "20.720 CLP", 82)
const producto12 = new Producto(12, "Serúm - Reviving Rose Infusion", "Aromatica", "23.920 CLP", 44)

const producto13 = new Producto(13, "Hidratante - Green Tea Emulsion", "Instree", "12.720 CLP", 33)
const producto14 = new Producto(14, "Hidratante - Snail Recovery", "Mizon", "11.120 CLP", 50)
const producto15 = new Producto(15, "Hidratante - Avocado Relief Cream", "Frudia", "19.120 CLP", 51)

const carritoCompra = JSON.parse(localStorage.getItem("listaProductos") || '[]');

function compraProducto(){
    do {
        opcionProducto = parseInt(prompt("¿Qué tipo de skincare quieres comprar hoy? (ingresa el número de la opción) \n \n Las opciones son: \n \n 1. Limpiadora \n 2. Tónico \n 3. Mascarilla \n 4. Serúm \n 5. Hidratante "))

        if (opcionProducto === 1) {
            tipoProducto = parseInt(prompt("Para este tipo de producto, las opciones son: \n" + "1. " + producto1.tipo + " - " + producto1.precio + "\n" + "2. " + producto2.tipo + " - " + producto2.precio + "\n" + "3. " + producto3.tipo + " - " + producto3.precio))
            if (tipoProducto === 1) {
                alert("Elegiste el producto: " + producto1.tipo + "\n" + "Precio: " + producto1.precio + "\n¡Gracias por tu compra!")                
                carritoCompra.push(producto1)

            } else if (tipoProducto === 2) {
                alert("Elegiste el producto: " + producto2.tipo + "\n" + "Precio: " + producto2.precio + "\n¡Gracias por tu compra!")
                carritoCompra.push(producto2)

            } else if (tipoProducto === 3){
                alert("Elegiste el producto: " + producto3.tipo + "\n" + "Precio: " + producto3.precio +  "\n¡Gracias por tu compra!")
                carritoCompra.push(producto3)

            }else {
                alert("Ingresaste un valor no válido o un producto que no existe.")
            }
        }else if (opcionProducto === 2) {
            tipoProducto = parseInt(prompt("Para este tipo de producto, las opciones son: \n" + "1. " + producto4.tipo + " - " + producto4.precio + "\n" + "2. " + producto5.tipo + " - " + producto5.precio + "\n" + "3. " + producto6.tipo + " - " + producto6.precio))
            if (tipoProducto === 1) {
                alert("Elegiste el producto: " + producto4.tipo + "\n" + "Precio: " + producto4.precio + "\n¡Gracias por tu compra!")
                carritoCompra.push(producto4)

            } else if (tipoProducto === 2) {
                alert("Elegiste el producto: " + producto5.tipo + "\n" + "Precio: " + producto5.precio + "\n¡Gracias por tu compra!")
                carritoCompra.push(producto5)

            } else if (tipoProducto === 3){
                alert("Elegiste el producto: " + producto6.tipo + "\n" + "Precio: " + producto6.precio + "\n¡Gracias por tu compra!")
                carritoCompra.push(producto6)

            }else {
                alert("Ingresaste un valor no válido o un producto que no existe.")
            }
        }else if (opcionProducto === 3) {
            tipoProducto = parseInt(prompt("Para este tipo de producto, las opciones son: \n" + "1. " + producto7.tipo + " - " + producto7.precio + "\n" + "2. " + producto8.tipo + " - " + producto8.precio + "\n" + "3. " + producto9.tipo + " - " + producto9.precio))
            if (tipoProducto === 1) {
                alert("Elegiste el producto: " + producto7.tipo + "\n" + "Precio: " + producto7.precio + "\n¡Gracias por tu compra!")
                carritoCompra.push(producto7)

            } else if (tipoProducto === 2) {
                alert("Elegiste el producto: " + producto8.tipo + "\n" + "Precio: " + producto8.precio + "\n¡Gracias por tu compra!")
                carritoCompra.push(producto8)

            } else if (tipoProducto === 3){
                alert("Elegiste el producto: " + producto9.tipo + "\n" + "Precio: " + producto9.precio + "\n¡Gracias por tu compra!")
                carritoCompra.push(producto9)
            }else {
                alert("Ingresaste un valor no válido o un producto que no existe.")
            }
        }else if (opcionProducto === 4) {
            tipoProducto = parseInt(prompt("Para este tipo de producto, las opciones son: \n" + "1. " + producto10.tipo + " - " + producto10.precio + "\n" + "2. " + producto11.tipo + " - " + producto11.precio + "\n" + "3. " + producto12.tipo + " - " + producto12.precio))
            if (tipoProducto === 1) {
                alert("Elegiste el producto: " + producto10.tipo + "\n" + "Precio: " + producto10.precio + "\n¡Gracias por tu compra!")
                carritoCompra.push(producto10)

            } else if (tipoProducto === 2) {
                alert("Elegiste el producto: " + producto11.tipo + "\n" + "Precio: " + producto11.precio + "\n¡Gracias por tu compra!")
                carritoCompra.push(producto11)

            } else if (tipoProducto === 3){
                alert("Elegiste el producto: " + producto12.tipo + "\n" + "Precio: " + producto12.precio + "\n¡Gracias por tu compra!")
                carritoCompra.push(producto12)

            }else {
                alert("Ingresaste un valor no válido o un producto que no existe.")
            }
        }else if (opcionProducto === 5) {
            tipoProducto = parseInt(prompt("Para este tipo de producto, las opciones son: \n" + "1. " + producto13.tipo + " - " + producto13.precio + "\n" + "2. " + producto14.tipo + " - " + producto14.precio + "\n" + "3. " + producto15.tipo + " - " + producto15.precio))
            if (tipoProducto === 1) {
                alert("Elegiste el producto: " + producto13.tipo + "\n" + "Precio: " + producto13.precio + "\n¡Gracias por tu compra!")
                carritoCompra.push(producto13)

            } else if (tipoProducto === 2) {
                alert("Elegiste el producto: " + producto14.tipo + "\n" + "Precio: " + producto14.precio + "\n¡Gracias por tu compra!")
                carritoCompra.push(producto14)

            } else if (tipoProducto === 3){
                alert("Elegiste el producto: " + producto15.tipo + "\n" + "Precio: " + producto15.precio + "\n¡Gracias por tu compra!")
                carritoCompra.push(producto15)

            }else {
                alert("Ingresaste un valor no válido o un producto que no existe.")
            }
        }else {
            alert("Ingresaste un valor no válido o un producto que no existe.")
        }

        otroProducto = confirm("¿Quieres añadir otro producto?")
        if (otroProducto == false) {
            alert("¡Esperamos verte pronto!")
            break
        }

    }while(opcionProducto)

    const guardaLocal = (clave, valor) => {localStorage.setItem(clave, valor)}
    guardaLocal("listaProductos", JSON.stringify(carritoCompra))
    const listaProductos = JSON.parse(localStorage.getItem("listaProductos"))

    // compraProducto()
    console.table(carritoCompra)
}

