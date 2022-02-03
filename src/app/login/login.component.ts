import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from '../services/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup
  constructor(private fb: FormBuilder, private authService:AutenticacionService) {
    this.form = this.fb.group({
      correo: ["",Validators.required],
      password: ["",Validators.required]
    })
   }

  ngOnInit(): void {
  }
  iniciarSesion(){
    if (this.form.valid){
      this.authService.login(this.form.value.correo,this.form.value.password).subscribe(
        {
          next: (r) =>{
            console.log("Has iniciado sesión satisfactoriamente, y tu token fue almacenado.")
          },
          error: (r) =>{
            console.log("Uh hoh, ha habido un problema"+r)

          }
        }
      );
    }

  }
}
