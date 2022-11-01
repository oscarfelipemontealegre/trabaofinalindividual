import { Component, OnInit } from '@angular/core';
import { UsuarioN } from 'src/app/models/usuariosN';
import { UsuariosService } from "src/app/services/usuariosService";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {

  listaUsuario: UsuarioN[]=[];

  constructor(private servicioUsuario:UsuariosService ) { }

  ngOnInit(): void {
    this.obeneteraUsuarios()
  }
    
  obeneteraUsuarios(){
    this.servicioUsuario.getUsuarios().subscribe((data) =>{
      console.log(data)
      this.listaUsuario = data
    }, (error)=>{
      console.log(error)
    })
  }
eliminarUsuario(id:any){
  Swal.fire({
    title: 'Esta seguro de eliminar este usuario?',
    text: "si esta seguro, este proceso no sera !",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'si, se borro el usuario!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.servicioUsuario.borrarUsuario(id).subscribe((data) =>{
        console.log(data)
        Swal.fire({
            title:'Usuario elimainado correctamente',
            icon: 'success',
            iconColor: '#84b530'
        })
      }, (error)=>{
        console.log(error)
      })
      
    }
  })
}

}