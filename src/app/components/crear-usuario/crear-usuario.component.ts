import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UsuarioN } from 'src/app/models/usuariosN';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  usuarioForm:FormGroup;
  //regexCorreo: /^(?:[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'+/=?^_`{|}~-]+)|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])")@(?:(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-][a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  constructor(private fb:FormBuilder) {
    this.usuarioForm=this.fb.group({
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      correo:['',Validators.required],
      telefono:['',Validators.required],
      Rol:['',Validators.required]
    })

   }
 
  ngOnInit(): void {
  }

  usuarioNuevo(){
    const USUARIO: UsuarioN = {
      nombre:this.usuarioForm.get('nombre')?.value,
      apellido:this.usuarioForm.get('apellido')?.value,
      correo:this.usuarioForm.get('correo')?.value,
      telefono:this.usuarioForm.get('telefono')?.value,
      rol:this.usuarioForm.get('Rol')?.value

    }

  console.log(USUARIO)
  }

}
