

let nombre, correo, mensaje;
let formulario = document.getElementById("form");


formulario.addEventListener("submit", (e)=>{
    e.preventDefault()
    leerdatos()
})

function leerdatos() {
    nombre = document.getElementById("Nombre").value
    correo = document.getElementById("Correo").value
    mensaje = document.getElementById("textarea").value
    alert(nombre)
    validardatos(nombre,correo,mensaje)
    guardarlocalstorage(nombre,correo,mensaje)
}


function  validardatos(nombre,correo,mensaje) {
      if(nombre.length==0 || correo.length==0 || mensaje.length){

        swal.fire({
            title: "error",
            text: "do you want to continue",
            icon: "error",
            confirmbuttontext: "cool",
            inconcolor:"purple"

        })
    }
}

function guardarlocalstorage(nombre,correo,mensaje) {
    localStorage.setItem("nombre",nombre)
    localStorage.setItem("correo",correo)
    localStorage.setItem("mensaje",mensaje)
}

function listardata() {
    let nombreusu = localStorage.getItem("nombre")
    let correousu = localStorage.getItem("correo")
    let mensajeusu = localStorage.getItem("correo")
}
