export interface Comentario{
  "id":number,
  "comentario":string,
  "idProducto":number,
  "idUsuario":number,
  "createdAt":string,
  "updatedAt":string,
  "usuario":{
    "id":number,
    "nombre":string,
    "apellido":string}
}
