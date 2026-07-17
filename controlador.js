import Apimodelo from "./api_modelo.js";
import ClienteModelo from "./cliente_modelo.js";

//codigo principal
const boton_registrar = document.getElementById("boton_registrar");
const mensaje = document.getElementById("mensaje");
const api_modelo = new Apimodelo();

// hacemos la funcion de registrar cliente
boton_registrar.addEventListener("click", function() {
    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const rol = document.querySelector("#rol").value;
// creamos el objeto cliente
    const obj_cliente = new ClienteModelo(nombre, apellido, rol);
    const lista_cliente = "lista_cliente";
//validamos el cliente antes de guardarlo
    if (!obj_cliente.es_valido()) {
        mensaje.textContent = "El nombre debe tener más de 3 caracteres.";
        return;
    }
// llamamos a la funcion guardar_cliente y hacemos el saludo si se guardo correctamente, sino mostramos un mensaje de error
    const se_guardo_cliente = api_modelo.guardar_cliente(lista_cliente, obj_cliente);
    if (se_guardo_cliente) {
        mensaje.textContent = `Hola ${nombre} ${apellido}, tu rol es: ${rol}.`;
    } else {
        mensaje.textContent = "Error al guardar el cliente, ya existe en el almacenamiento local.";
    }
});


/*
flechita () => {}
tradicional function nombre_funcion(){}
anonimas variable = function (){}
async function nombre_metodo (){
const info = await fetch();
const info_dian = await api_dian();
}
*/
