const carrito = [
    {
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    premium: true
    },
    {
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    premium: true
    },
    {
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    premium: false
    },
    {
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    premium: false
    }
   ];


   //Mostrar una estructura de carrito de la compra, listar todos los productos y calcular el total 
   

   function listar (producto) {
       var num = 0
       console.log ("Producto número " + num)
       console.log ("Id= " + producto.id)
       console.log ("Name= " + producto.name)
       console.log ("Price= " + producto.price)
       console.log ("Count= " + producto.count)
       console.log ("Premium= " + producto.premium)
       var total = producto.count * producto.price
       console.log ("El total es: " + total)
   }

for (producto of carrito) {
    listar (producto)
}

var totalCarro=0;

for (producto of carrito) {
    totalCarro +=  producto.count * producto.price
}

console.log ("El precio total de todos los productos es de : " +  totalCarro)



// Eliminar un producto del carrito de la compra

var posicion;

for (i =0 ; i < carrito.length ; i++) {
   if (carrito[i].id == 198752) {
       posicion = carrito[i];
       console.log ('POSICION:', posicion)
   }  
}

carrito.splice(posicion, 1);
console.log('Nuevo Carrito:', carrito);




//Filtrar por los productos que sean prime

for (producto of carrito){
    if (producto.premium == true) {
        console.log ("Este producto es premium ")
        listar (producto)
    }
}

//Si todos los productos son prime que diga "Gasos de envío cero, si no "Con gastos de envío"

var envioGratis = true;

for (producto of carrito) {
    envioGratis = envioGratis && producto.premium
}
if (envioGratis == true) {
    console.log("Los gastos de envío son gratis")
}else {
    console.log("Debe abonar los gastos de envío")
}


//Mostrar el carrito en un listado de html básico

document.write ("<h1>CARRITO DE LA COMPRA</h1>");
for (producto of carrito){
    document.write("<ul>");
    document.write("<li>" + producto.name + "</li>");
    document.write("</ul>");
}

// Aplicar un descuento del 5% si la compra es mayor de 50€

let discount = 0
if (totalCarro>=50){
    discount = totalCarro * 0.05
}
console.log ("Se ha aplicado un descuento de: " + discount)
console.log ("El total con descuento es de: " + (totalCarro-discount))
