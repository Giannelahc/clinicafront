import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FormComponent } from './components/pages/general/form/form.component';
import { LoginComponent } from './components/pages/general/login/login.component';
import { RegistroPacienteComponent } from './components/pages/general/registroPaciente/registroPaciente.component';

import { NgxModule} from './ngx.module'
 
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    FormComponent,
    LoginComponent,
    RegistroPacienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey:''
    }),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
