import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Comentario } from '../interfaces/comentario.interface';
import { AlmacenamientoTokensService } from '../services/almacenamiento-tokens.service';
import { ComentarioproductoService } from '../services/comentarioproducto.service';

@Component({
  selector: 'app-producto-comentarios',
  templateUrl: './producto-comentarios.component.html',
  styleUrls: ['./producto-comentarios.component.css']
})
export class ProductoComentariosComponent implements OnInit {

  comentarios! : Comentario[];
  form : FormGroup;
  comentarioAModificar : FormControl
  usuarioActivo : number
  edit = -1
  constructor(
    private route: ActivatedRoute,
    private comentarioService: ComentarioproductoService,
    private fb: FormBuilder,
    private ats:AlmacenamientoTokensService
  ) {
    this.form = this.fb.group({
      comentario: ["",Validators.required],
      productoID: [this.route.snapshot.params.productoID]
    })
    this.usuarioActivo = this.ats.obtenerUsuario().id
    this.comentarioAModificar = new FormControl("")
 this.mostrarComentarios()
  }

  ngOnInit(): void {
  }

  mostrarComentarios(){
    this.comentarioService.obtenerComentarios(this.route.snapshot.params.productoID).subscribe((comentario:any)=>{
      this.comentarios = comentario
    })
  }
  modificar(comentarioIndex : number){
    console.log(comentarioIndex)
    this.comentarioAModificar.setValue(this.comentarios[comentarioIndex].comentario)
    console.log(this.comentarios)
    this.edit = this.comentarios[comentarioIndex].id
  }
  comentar(){
    if (this.form.valid){
      this.comentarioService.comentar(this.form.value.comentario,this.route.snapshot.params.productoID).subscribe(
        (comentarioPublicado) =>{
           console.log(comentarioPublicado)
        }
      )
      this.mostrarComentarios();
    }
  }

  eliminar(idComentario : number){
    this.comentarioService.eliminar(idComentario).subscribe((estado)=>{
      this.mostrarComentarios();
    })
  }

  concretoModificacion(){
    console.log(this.edit)
    if (this.comentarioAModificar.valid)
      this.comentarioService.modificar(this.comentarioAModificar.value,this.edit).subscribe((res)=>{
        this.edit= -1
        this.mostrarComentarios()
      })
  }
}
