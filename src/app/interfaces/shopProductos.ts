export interface ShopProductos{
  "id":number,
  "idCategoria":number,
  "idDescuento":number,
  "nombre":string,
  "descripcion":string,
  "precio":string,
  "fecha":string,
  "imagen":string,
  "descuento":{
    "id":number,
    "nombre":string,
    "descuento":string
  }
}
