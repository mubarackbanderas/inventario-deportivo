function cargarProductos(){

fetch("http://localhost:8080/productos")
.then(response => response.json())
.then(productos => {

    console.log(productos);

});

}

cargarProductos();

document.getElementById("formProducto").addEventListener("submit", function(e){

    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const cantidad = document.getElementById("cantidad").value;
    const precio = document.getElementById("precio").value;

    fetch("http://localhost:8080/productos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nombre: nombre,
            cantidad: parseInt(cantidad),
            precio: parseFloat(precio)
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log("Producto creado:", data);
        alert("Producto agregado correctamente");
    })
    .catch(error => {
        console.error("Error:", error);
    });

});