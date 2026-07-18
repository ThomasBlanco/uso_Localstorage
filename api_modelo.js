export default class Apimodelo {
guardar_cliente(lista_cliente, obj_cliente) {
    // obtener la lista guardada
    const stored = localStorage.getItem(lista_cliente);
    const lista = stored ? JSON.parse(stored) : [];

    // verificar si el cliente ya existe
    const existe_cliente = lista.filter(cliente =>
        cliente.nombre === obj_cliente.nombre &&
        cliente.apellido === obj_cliente.apellido
    );
    if (existe_cliente.length > 0) {
        return false;
    }

    // agregar y guardar cliente
    lista.push(obj_cliente);
    localStorage.setItem(lista_cliente, JSON.stringify(lista));
    return true;
}
    // funcion para imprimir la lista de clientes guardados 
    imprimir_cliente() {
        const info = localStorage.getItem("lista_cliente");
        const lista = JSON.parse(info);
        console.log(lista);
    }
};