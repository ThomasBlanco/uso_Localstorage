import ClienteModelo from "./cliente_modelo.js";
//codigo  principal
const boton_registrar = document.getElementById("boton_registrar");
boton_registrar.addEventListener("click", function() {

    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const rol = document.querySelector("#rol").value;

    const obj_cliente = new ClienteModelo (nombre, apellido, rol);

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
