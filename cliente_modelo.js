export default class ClienteModelo {
    constructor(nombre, apellido, rol) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.rol = rol;
    }

    es_valido() {
        return this.nombre.trim().length > 3;
    }
};