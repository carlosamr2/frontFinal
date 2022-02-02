import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactosService } from '../services/contactos.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent implements OnInit {
  formulario : FormGroup;
  ciudades !: string[];

  constructor(private formBuilder: FormBuilder , private contactanosService : ContactosService) {
    this.formulario = this.formBuilder.group({
      "nombre": ["", Validators.required],
      "email": ["", Validators.required],
      "fecha_de_nacimiento": ["", Validators.required],
      "ciudad": ["", Validators.required],
      "asunto": ["", Validators.required],
      "mensaje": ["", Validators.required],
    });

    this.contactanosService.obtenerCiudades().subscribe((ciudades : string[]) => {
        this.ciudades = ciudades;
    })
  }

  ngOnInit(): void {}

  enviar(){
    this.contactanosService.enviarFormulario(this.formulario.value).subscribe((respuesta : string) =>{
      console.log(respuesta);
    });
  }
}
