import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListarUsuarioComponent } from './components/listar-usuario/listar_usuario.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path:'',component:InicioComponent},
  {path:'crear-usuario',component:CrearUsuarioComponent},
  {path:'listar-usuario',component:ListarUsuarioComponent},
  {path:'404',component:NotFoundComponent},
  {path:'**', redirectTo:'404', pathMatch: 'full'},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
