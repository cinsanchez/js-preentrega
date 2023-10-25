
function Producto(id, tipo, marca, precio, stock){
    this.id = id
    this.tipo = tipo
    this.marca = marca
    this.precio = parseInt(precio)
    this.stock = stock
}

const producto1 = new Producto(1, "Limpiadora - Green Tea", "Instree", "13500", 10)
const producto2 = new Producto(2, "Limpiadora - Pore Cleansing", "Hanskin", "21520", 85)
const producto3 = new Producto(3, "Limpiadora - Natural coconut", "Aromatica", "19120", 38)

const producto4 = new Producto(4, "Tónico - Hyaluronic Acid Toner", "Instree", "13520", 15)
const producto5 = new Producto(5, "Tónico - Green Tea Toner", "Instree", "13520", 69)
const producto6 = new Producto(6, "Tónico - Snail Repair", "Mizon", "7900", 24)

const producto7 = new Producto(7, "Mascarilla - Good night White Sleeping Mask", "Mizon", "7920", 59)
const producto8 = new Producto(8, "Mascarilla - Ultimate Nourishing Rice", "Cosrx", "17520", 76)
const producto9 = new Producto(9, "Mascarilla - Clear Skin PHA", "Instree", "17520", 34)

const producto10 = new Producto(10, "Serúm - Power 10 Formula", "It's skin", "14320", 15)
const producto11 = new Producto(11, "Serúm - C-Niacin", "Instree", "20720", 82)
const producto12 = new Producto(12, "Serúm - Reviving Rose Infusion", "Aromatica", "23920", 44)

const producto13 = new Producto(13, "Hidratante - Green Tea Emulsion", "Instree", "12720", 33)
const producto14 = new Producto(14, "Hidratante - Snail Recovery", "Mizon", "11120", 50)
const producto15 = new Producto(15, "Hidratante - Avocado Relief Cream", "Frudia", "19120", 51)

const carritoCompra = JSON.parse(localStorage.getItem("listaProductos") || '[]');

const botonProducto1 = document.getElementById("agregaProducto1")
botonProducto1.addEventListener("click", compraProducto1)

function compraProducto1(){
    alert("Se ha agregado el producto: " + producto1.tipo + " - " + producto1.marca + " a tu carrito de compra.")
    carritoCompra.push(producto1)

    const guardaLocal = (clave, valor) => {localStorage.setItem(clave, valor)}
    guardaLocal("listaProductos", JSON.stringify(carritoCompra))
    const listaProductos = JSON.parse(localStorage.getItem("listaProductos"))
}


const botonProducto2 = document.getElementById("agregaProducto2")
botonProducto2.addEventListener("click", compraProducto2)

function compraProducto2(){
    alert("Se ha agregado el producto: " + producto2.tipo + " - " + producto2.marca + " a tu carrito de compra.")
    carritoCompra.push(producto2)

    const guardaLocal = (clave, valor) => {localStorage.setItem(clave, valor)}
    guardaLocal("listaProductos", JSON.stringify(carritoCompra))
    const listaProductos = JSON.parse(localStorage.getItem("listaProductos"))
}


const botonProducto3 = document.getElementById("agregaProducto3")
botonProducto3.addEventListener("click", compraProducto3)

function compraProducto3(){
    alert("Se ha agregado el producto: " + producto3.tipo + " - " + producto3.marca + " a tu carrito de compra.")
    carritoCompra.push(producto3)

    const guardaLocal = (clave, valor) => {localStorage.setItem(clave, valor)}
    guardaLocal("listaProductos", JSON.stringify(carritoCompra))
    const listaProductos = JSON.parse(localStorage.getItem("listaProductos"))
}


const botonProducto4 = document.getElementById("agregaProducto4")
botonProducto4.addEventListener("click", compraProducto4)

function compraProducto4(){
    alert("Se ha agregado el producto: " + producto4.tipo + " - " + producto4.marca + " a tu carrito de compra.")
    carritoCompra.push(producto4)

    const guardaLocal = (clave, valor) => {localStorage.setItem(clave, valor)}
    guardaLocal("listaProductos", JSON.stringify(carritoCompra))
    const listaProductos = JSON.parse(localStorage.getItem("listaProductos"))
}


const botonProducto5 = document.getElementById("agregaProducto5")
botonProducto5.addEventListener("click", compraProducto5)

function compraProducto5(){
    alert("Se ha agregado el producto: " + producto5.tipo + " - " + producto5.marca + " a tu carrito de compra.")
    carritoCompra.push(producto5)

    const guardaLocal = (clave, valor) => {localStorage.setItem(clave, valor)}
    guardaLocal("listaProductos", JSON.stringify(carritoCompra))
    const listaProductos = JSON.parse(localStorage.getItem("listaProductos"))
}



const botonProducto6 = document.getElementById("agregaProducto6")
botonProducto6.addEventListener("click", compraProducto6)

function compraProducto6(){
    alert("Se ha agregado el producto: " + producto6.tipo + " - " + producto6.marca + " a tu carrito de compra.")
    carritoCompra.push(producto6)

    const guardaLocal = (clave, valor) => {localStorage.setItem(clave, valor)}
    guardaLocal("listaProductos", JSON.stringify(carritoCompra))
    const listaProductos = JSON.parse(localStorage.getItem("listaProductos"))
}



const botonProducto7 = document.getElementById("agregaProducto7")
botonProducto7.addEventListener("click", compraProducto7)

function compraProducto7(){
    alert("Se ha agregado el producto: " + producto7.tipo + " - " + producto7.marca + " a tu carrito de compra.")
    carritoCompra.push(producto7)

    const guardaLocal = (clave, valor) => {localStorage.setItem(clave, valor)}
    guardaLocal("listaProductos", JSON.stringify(carritoCompra))
    const listaProductos = JSON.parse(localStorage.getItem("listaProductos"))
}



const botonProducto8 = document.getElementById("agregaProducto8")
botonProducto8.addEventListener("click", compraProducto8)

function compraProducto8(){
    alert("Se ha agregado el producto: " + producto8.tipo + " - " + producto8.marca + " a tu carrito de compra.")
    carritoCompra.push(producto8)

    const guardaLocal = (clave, valor) => {localStorage.setItem(clave, valor)}
    guardaLocal("listaProductos", JSON.stringify(carritoCompra))
    const listaProductos = JSON.parse(localStorage.getItem("listaProductos"))
}



const botonProducto9 = document.getElementById("agregaProducto9")
botonProducto9.addEventListener("click", compraProducto9)

function compraProducto9(){
    alert("Se ha agregado el producto: " + producto9.tipo + " - " + producto9.marca + " a tu carrito de compra.")
    carritoCompra.push(producto9)

    const guardaLocal = (clave, valor) => {localStorage.setItem(clave, valor)}
    guardaLocal("listaProductos", JSON.stringify(carritoCompra))
    const listaProductos = JSON.parse(localStorage.getItem("listaProductos"))
}



const botonProducto10 = document.getElementById("agregaProducto10")
botonProducto10.addEventListener("click", compraProducto10)

function compraProducto10(){
    alert("Se ha agregado el producto: " + producto10.tipo + " - " + producto10.marca + " a tu carrito de compra.")
    carritoCompra.push(producto10)

    const guardaLocal = (clave, valor) => {localStorage.setItem(clave, valor)}
    guardaLocal("listaProductos", JSON.stringify(carritoCompra))
    const listaProductos = JSON.parse(localStorage.getItem("listaProductos"))
}



const botonProducto11 = document.getElementById("agregaProducto11")
botonProducto11.addEventListener("click", compraProducto11)

function compraProducto11(){
    alert("Se ha agregado el producto: " + producto11.tipo + " - " + producto11.marca + " a tu carrito de compra.")
    carritoCompra.push(producto11)

    const guardaLocal = (clave, valor) => {localStorage.setItem(clave, valor)}
    guardaLocal("listaProductos", JSON.stringify(carritoCompra))
    const listaProductos = JSON.parse(localStorage.getItem("listaProductos"))
}



const botonProducto12 = document.getElementById("agregaProducto12")
botonProducto12.addEventListener("click", compraProducto12)

function compraProducto12(){
    alert("Se ha agregado el producto: " + producto12.tipo + " - " + producto12.marca + " a tu carrito de compra.")
    carritoCompra.push(producto12)

    const guardaLocal = (clave, valor) => {localStorage.setItem(clave, valor)}
    guardaLocal("listaProductos", JSON.stringify(carritoCompra))
    const listaProductos = JSON.parse(localStorage.getItem("listaProductos"))
}



const botonProducto13 = document.getElementById("agregaProducto13")
botonProducto13.addEventListener("click", compraProducto13)

function compraProducto13(){
    alert("Se ha agregado el producto: " + producto13.tipo + " - " + producto13.marca + " a tu carrito de compra.")
    carritoCompra.push(producto13)

    const guardaLocal = (clave, valor) => {localStorage.setItem(clave, valor)}
    guardaLocal("listaProductos", JSON.stringify(carritoCompra))
    const listaProductos = JSON.parse(localStorage.getItem("listaProductos"))
}



const botonProducto14 = document.getElementById("agregaProducto14")
botonProducto14.addEventListener("click", compraProducto14)

function compraProducto14(){
    alert("Se ha agregado el producto: " + producto14.tipo + " - " + producto14.marca + " a tu carrito de compra.")
    carritoCompra.push(producto14)

    const guardaLocal = (clave, valor) => {localStorage.setItem(clave, valor)}
    guardaLocal("listaProductos", JSON.stringify(carritoCompra))
    const listaProductos = JSON.parse(localStorage.getItem("listaProductos"))
}


const botonProducto15 = document.getElementById("agregaProducto15")
botonProducto15.addEventListener("click", compraProducto15)

function compraProducto15(){
    alert("Se ha agregado el producto: " + producto15.tipo + " - " + producto15.marca + " a tu carrito de compra.")
    carritoCompra.push(producto15)

    const guardaLocal = (clave, valor) => {localStorage.setItem(clave, valor)}
    guardaLocal("listaProductos", JSON.stringify(carritoCompra))
    const listaProductos = JSON.parse(localStorage.getItem("listaProductos"))
}

const finalizaCompra = document.getElementById("botonFinaliza")
finalizaCompra.addEventListener("click", resumenCompra)


function resumenCompra(){
    let detalleCompra = document.createElement("div")
    let totalPrecio = 0
    
    carritoCompra.forEach(element => {
        let detalleProducto = document.createElement("p")
        detalleProducto.innerText = element.tipo + " " + element.precio
        detalleCompra.append(detalleProducto)
        totalPrecio = totalPrecio + element.precio
    });

    console.log(totalPrecio)
    document.getElementById("detalleCompraProductos").innerHTML = ''
    document.getElementById("detalleCompraProductos").append(detalleCompra)
    document.getElementById("totalCompra").innerHTML = ''
    document.getElementById("totalCompra").append(totalPrecio)
}