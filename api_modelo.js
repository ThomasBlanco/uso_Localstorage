export default class Api_modelo {
export {controlador} from "./controlador.js";

    guardar_cliente(lista_cliente, obj_cliente) {
        //get --: Tomar la info
        const lista = localStorage.getItem(JSON.parse(lista_cliente));
        lista.push(obj_cliente);
        //set --: sobreescribir la info
        localStorage.setItem(lista_cliente, JSON.stringify(lista));
    }

    imprimir_cliente() {
        const info = localStorage.getItem("lista_cliente");
        console.log(info);
    }
}