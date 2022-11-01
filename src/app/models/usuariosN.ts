

export class UsuarioN {
    _id?:string;
    nombre:string;
    apellido:string;
    correo:string;
    telefono:number;
    rol:string;

    constructor(nombre:string,apellido:string, correo:string, telefono:number, rol:string){
        this.nombre=nombre
        this.apellido=apellido
        this.correo=correo
        this.telefono=telefono
        this.rol=rol


    }
}

