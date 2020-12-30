import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component'
import { FormComponent } from './components/pages/general//form/form.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'paciente/registro', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
