export default class Apimodelo {
    guardar_cliente(lista_cliente, obj_cliente) {
        // delegar la validación al modelo (si existe el método)
        if (obj_cliente && typeof obj_cliente.es_valido === "function") {
            if (!obj_cliente.es_valido()) {
                return { success: false, message: "Nombre inválido: debe tener más de 3 caracteres." };
            }
        }

        // obtener la lista guardada
        const stored = localStorage.getItem(lista_cliente);
        const lista = stored ? JSON.parse(stored) : [];

        // verificar si el cliente ya existe
        const existe_cliente = lista.filter(cliente =>
            cliente.nombre === obj_cliente.nombre &&
            cliente.apellido === obj_cliente.apellido
        );
        if (existe_cliente.length > 0) {
            return { success: false, message: "Error: el usuario ya existe en el localStorage." };
        }

        // agregar y guardar cliente
        lista.push(obj_cliente);
        localStorage.setItem(lista_cliente, JSON.stringify(lista));
        return { success: true, message: "Guardado correctamente." };

    }
    // funcion para imprimir la lista de clientes guardados 
    imprimir_cliente() {
        const info = localStorage.getItem("lista_cliente");
        if (!info) {
            console.log([]);
            return;
        }
        try {
            const lista = JSON.parse(info);
            console.log(lista);
        } catch (e) {
            console.error('Error parseando lista_cliente:', e);
            console.log([]);
        }
    }
};