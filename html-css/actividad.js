const usuario = "Federico";
const contraseña = "1234";

let usuarioInput = document.getElementById("valorUsuario").value
let contraseñaInput = document.getElementById("valorContraseña").value

if (usuarioInput === "Federico" && contraseñaInput === "1234") {
    console.log("Usuario y contraseña correctos");
} else { 
    console.log("Usuario o contraseña incorrecto, vuelva a intentarlo");
}
