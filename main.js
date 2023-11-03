function init(){
  listadoProductos()

  window.carritoCompra = JSON.parse(localStorage.getItem("listaProductos") || '[]');

  const finalizaCompra = document.getElementById("botonFinaliza")
  finalizaCompra.addEventListener("click", resumenCompra) 
}
init();

function listadoProductos() {
  fetch("productos.json")
  .then(response => response.json())
  .then(renderizarProductos)
}

function renderizarProductos(datos) {
    window.listaProductos = datos.listaProductos

    listaProductos.forEach(element => {
      let trProducto = document.createElement("div")
      trProducto.className = "card"
      trProducto.className = "card text-center"
      trProducto.style = "width: 18rem"
  
      let tdImagen = document.createElement("img")

      let divProducto = document.createElement("div")
      divProducto.className = "card-body"

      let tdTipo = document.createElement("h5")
      tdTipo.className = "card-title"

      let tdDescripcion = document.createElement("p")
      tdDescripcion.className = "card-title"

      let tdMarca = document.createElement("p")
      tdMarca.className = "card-text"

      let tdPrecio = document.createElement("p")
      tdPrecio.className = "card-text"

      let tdBottonAgrega = document.createElement("a")
      let BotonCompra = document.createElement("button")
  
      tdImagen.src = element.urlimagen
      tdTipo.innerText = element.tipo
      tdDescripcion.innerText = element.descripcion
      tdMarca.innerText = element.marca
      tdPrecio.innerText = "$" + element.precio
      BotonCompra.innerText = "Agregar"
  
      trProducto.append(tdImagen)
      trProducto.append(tdTipo)
      tdImagen.className = "card-img-top"
      tdImagen.className = "imageproducto"
      trProducto.append(tdDescripcion)
      trProducto.append(tdMarca)
      trProducto.append(tdPrecio)
      trProducto.append(tdBottonAgrega)
      tdBottonAgrega.append(BotonCompra)
      BotonCompra.setAttribute("product-id", element.id)
      BotonCompra.addEventListener("click", compraProducto)
      BotonCompra.className = "btn btn-primary"

      document.getElementById("listaProductosdiv").append(trProducto)
  })
}

function compraProducto(event){
  const detalleProducto = window.listaProductos.find(producto => producto.id == event.target.getAttribute("product-id")) 

  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: "Se ha agregado el producto: " + detalleProducto.tipo + " - " + detalleProducto.marca + " a tu carrito de compra.",
    showConfirmButton: false,
    timer: 1500
  })

  carritoCompra.push(detalleProducto)

  const guardaLocal = (clave, valor) => {localStorage.setItem(clave, valor)}
  guardaLocal("listaProductos", JSON.stringify(carritoCompra))
  const listaProductos = JSON.parse(localStorage.getItem("listaProductos"))
}

    document.getElementById("divBotonFinaliza").className = "d-grid gap-2 col-6 mx-auto"
    let BotonCheckout = document.getElementById("botonFinaliza")
    BotonCheckout.innerText = "Ir al carrito"
    BotonCheckout.className = "btn btn-secondary btn-lg"


function resumenCompra(){
    let textoTotalCompra = document.createElement("td")
    document.getElementById("detalleCompraProductos").innerHTML = ''
    let totalPrecio = 0
    
    carritoCompra.forEach(element => {
      let trDetalleCompra = document.createElement("tr")

        let detalleProducto = document.createElement("td")
        detalleProducto.innerText = element.tipo + " " + element.descripcion + " " + "$" + element.precio
        trDetalleCompra.append(detalleProducto)

        let tdBotonElimina = document.createElement("td")
        let botonElimina = document.createElement("button")
        botonElimina.innerText = "X"
        trDetalleCompra.append(tdBotonElimina)
        tdBotonElimina.append(botonElimina)
        botonElimina.setAttribute("product-id", element.id)
        botonElimina.addEventListener("click", eliminaProducto)
        botonElimina.className = "btn btn-danger"

        totalPrecio = totalPrecio + parseInt(element.precio)

        document.getElementById("detalleCompraProductos").append(trDetalleCompra)

    });

    if (totalPrecio == 0){
      Swal.fire('Tu carrito está vacío! \n Añade productos al carrito')
    }

    document.getElementById("textoTotalCompra").innerHTML = 'El total de tu compra es: $'
    document.getElementById("textoTotalCompra").append(textoTotalCompra)

    document.getElementById("totalCompra").innerHTML = ''
    document.getElementById("totalCompra").append(totalPrecio)
    
}

function eliminaProducto(event){
  const detalleProducto = window.listaProductos.find(producto => producto.id == event.target.getAttribute("product-id")) 

  Swal.fire('Se ha eliminado un producto!')

  carritoCompra = carritoCompra.filter((producto) => producto.id != event.target.getAttribute("product-id"))

  const guardaLocal = (clave, valor) => {localStorage.setItem(clave, valor)}
  guardaLocal("listaProductos", JSON.stringify(carritoCompra))
  const listaProductos = JSON.parse(localStorage.getItem("listaProductos"))

  resumenCompra()
}

