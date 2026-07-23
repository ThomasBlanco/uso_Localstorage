import Apimodelo from "./api_modelo.js";
import ClienteModelo from "./cliente_modelo.js";

//codigo principal
const boton_registrar = document.getElementById("boton_registrar");
const mensaje = document.getElementById("mensaje");
const resultadoElem = document.getElementById("resultado");
const api_modelo = new Apimodelo();
// hacemos la funcion de registrar cliente
if (!boton_registrar) {
    console.error('No se encontró el botón #boton_registrar');
} else {
    boton_registrar.addEventListener("click", function(event) {
    if (event && typeof event.preventDefault === "function") event.preventDefault();

    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const rol = document.querySelector("#rol").value;

    // creamos el objeto cliente (la validación y existencia la gestiona el modelo)
    const obj_cliente = new ClienteModelo(nombre, apellido, rol);
    const lista_cliente = "lista_cliente";

        // Saludo dinámico en la vista (responsabilidad del controlador)
        if (mensaje) mensaje.textContent = `Hola ${nombre} ${apellido}`;

        // Delegar validación y almacenamiento al modelo y mostrar su respuesta en la vista
        const resultado = api_modelo.guardar_cliente(lista_cliente, obj_cliente);
        console.log('Resultado almacenamiento:', resultado);

        // Mostrar resultado al usuario con color según el resultado en elemento separado
        if (resultadoElem) {
            resultadoElem.textContent = resultado.message || '';
            resultadoElem.style.color = resultado.success ? 'green' : 'red';
        }

        // Si se guardó correctamente, limpiar campos
        if (resultado.success) {
            document.querySelector("#nombre").value = '';
            document.querySelector("#apellido").value = '';
        }

    });
}


/*
flechita () => {}
tradicional function nombre_funcion(){}
anonimas variable = function (){}
async function nombre_metodo (){
const info = await fetch();
const info_dian = await api_dian();
}
*/
