const usuario = "Federico";
const contraseña = "1234";

let usuarioInput = document.getElementById("valorUsuario").value
let contraseñaInput = document.getElementById("valorContraseña").value
const session = localStorage.getItem("session")


// const getSession = async ()=> {
//
//    if(session){
//        const usuarios = await obtenerUsuarios()
//        console.log(usuarios)
//    }else{
//        console.log("no hay session")
//    }
// }
// getSession()

const inicioSesion =async ()=>{

    if (usuarioInput === "Federico" && contraseñaInput === "1234") {
        console.log("Usuario y contraseña correctos");
    
    localStorage.setItem("session", true);
    console.log(localStorage.getItem("session"));
    const usuarios = await obtenerUsuarios();
    
    } else { 
        console.log("Usuario o contraseña incorrecto, vuelva a intentarlo");
    }
}

