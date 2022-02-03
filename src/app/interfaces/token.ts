export interface Token{
  token : string;
  user : {
    id: number,
    rol: number,
    nombre: string,
    apellido: string,
    correo: string
  }
}
