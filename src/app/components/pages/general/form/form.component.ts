import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  mensajeRequerido: string = "Este campo es requerido";
  formulario: FormGroup

  @Input() events: Observable<void>;
  @Output() enviarForm: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  focus;
  focus1;
  focus2;
  focus3;
  focus4;
  focusTouched;
  focus1Touched;
  focus2Touched;
  focus3Touched;
  focus4Touched;

  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
    this.rellenarFormulario();
    this.events.subscribe(() => {
      this.enviarForm.emit(this.formulario);
    });
  }

  rellenarFormulario() {
    this.formulario = this.fb.group({
      email: ['', [Validators.required, Validators.email]], 
      password: ['', [Validators.required]],
      nombres: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      dni: ['', [Validators.required, Validators.maxLength(8),Validators.minLength(8)]]
    });
  }
  
}
