

async function obtenerUbicacion() {

    let datos={};
    datos.usuario = document.getElementById("usuario").value;
    datos.contrasenna = document.getElementById("pass").value;


    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            datos.latitude  = position.coords.latitude;
            datos.longitude = position.coords.longitude;
            var ubicacion = "Latitud: " + datos.latitude + ", Longitud: " + datos.longitude;
            document.getElementById("ubicacion").textContent = ubicacion;
            console.log(ubicacion);
        }, function (error) {
            alert("Error al obtener la ubicación: " + error.message);
        });
    } else {
        alert("La geolocalización no está disponible en este navegador.");
    }

}
