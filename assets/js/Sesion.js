class Sesion {
    constructor(usuario, contrasena) {
        this.usuario = usuario;
        this.contrasena = contrasena;
    }
}

let listaSesiones = [];

function Formulario() {
    let usuario = document.getElementById("usuario").value;
    let contrasena = document.getElementById("contrasena").value;

    if (usuario == "" || contrasena == "") {
        alert("Faltan datos");
    }

    if (usuario == "Admin" && contrasena == "1234") {
        alert("Bienvenido Admin");
        let login = new Sesion(usuario, contrasena);
        listaSesiones.push(login);
        localStorage.setItem("sesiones", JSON.stringify(listaSesiones));
    }
}

function CerraSesion(){
    localStorage.removeItem("sesiones");
    alert("Hasta luego, vuelva pronto");
}

let botonSesion = document.getElementById("botonSesion");
botonSesion.onclick = (e) => {
    e.preventDefault()
    Formulario();
}

let botonCerrar = document.getElementById("botonCerrar");
botonCerrar.onclick = (e) => {
    e.preventDefault()
    CerraSesion();
}