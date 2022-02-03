import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.cargarDatos();
  }
  cargarDatos() {
    fetch('http://localhost:3000/estadisticas')
    .then(respuesta => respuesta.json())
    .then(datos => {
      let contenedor: HTMLElement = document.getElementById('contenedor_reporte') as HTMLElement;
      contenedor.innerHTML = '';
      for(let dato of datos) {
        let plantilla = `
        <tr class="alert" role="alert" >
          <th scope="row">${dato.id_factura}</th>
          <td>${dato.nombre + ' ' + dato.apellido}</td>
          <td>${dato.id_producto}</td>
          <td>${dato.cantidad}</td>
          <td>${dato.fecha_profe}</td>
        </tr>`;
        contenedor.innerHTML += plantilla;
      } 
    })
    .catch(error => console.error);
  }
}
