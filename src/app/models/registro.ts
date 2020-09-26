export interface Registro {
    primerNombre : string;
    segundoNombre? : string;
    primerApellido : string;
    segundoApellido? : string;
    tipoIdentificacion : string;
    identificacion : string;
    fechaNacimiento : Date;
    direccion? : string;
    telefono? : string;
    genero? : string;
    estadoCivil? : string;
    email : string;
    userName? : string;
    password: string;
}
