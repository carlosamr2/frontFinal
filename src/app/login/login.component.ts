import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  demo(){
    fetch('http://localhost:3001/usuarios/validate?usuario=Alfredo&clave=123')
  .then(response => response.json())
  .then(data => console.log(data));
  }
}
