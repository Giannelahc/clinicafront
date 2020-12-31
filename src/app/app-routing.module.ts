import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component'
import { RegistroPacienteComponent } from './components/pages/general/registroPaciente/registroPaciente.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'paciente/registro', component: RegistroPacienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
