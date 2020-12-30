import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  mensajeRequerido: string = "Este campo es requerido";
  today: string = moment().format('D MMM YYYY');
  formulario : FormGroup
  constructor(public fb: FormBuilder) { 
    this.formulario = this.fb.group({
      email: ['', [Validators.required, Validators.email]], 
      password: ['', [Validators.required]],
      nombres: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      dni: ['', [Validators.required, Validators.maxLength(8),Validators.minLength(8)]],
      fechaNacimiento: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  guardarDatos() {
    console.log(moment(this.formulario.value.fechaNacimiento).format('YYYY/MM/DD'));
  }
}
