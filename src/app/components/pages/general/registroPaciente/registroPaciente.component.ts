import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Paciente } from 'src/app/models/Paciente'
import Swal from 'sweetalert2';
import * as moment from 'moment'
import { PacienteService} from '../../../../services/paciente.service'

@Component({
    selector: 'app-registroPaciente',
    templateUrl: './registroPaciente.component.html',
    styleUrls: []
})
export class RegistroPacienteComponent implements OnInit{
    
    public formulario: FormGroup;
    pacienteForm: FormGroup;

    eventsSubject: Subject<void> = new Subject<void>();

    focus;
    focusTouched;

    constructor(public fb: FormBuilder, public pacienteService: PacienteService, public route: Router) { }

    ngOnInit(): void {
        this.rellenarFormulario();
    }

    guardarDatos() {
        this.eventsSubject.next();
        if (this.formulario.valid && this.pacienteForm.valid) {
            var paciente = this.obtenerPaciente();
            this.pacienteService.registrarPaciente(paciente).subscribe(
                (resp: any) => {
                    //if(resp.estado){
                        this.redirigirLogin(resp);
                    /*}else{
                        Swal.fire(resp.titulo,resp.mensaje,resp.tipo);
                    }*/
                }
            )
        }else{
            Swal.fire('¡INFO!','Complete los campos obligatorios para continuar','info');
        }
    }

    guardarForm(event: FormGroup) { 
    this.formulario = event;
    }

    rellenarFormulario() {
        this.pacienteForm = this.fb.group({
        fechaNacimiento: ['', [Validators.required]],
        });
    }

    obtenerPaciente() {
        var paciente: Paciente = {
            fechaNacimiento: moment(this.pacienteForm.get('fechaNacimiento').value).format('YYYY/MM/DD'),
            persona: {
                email: this.formulario.get('email').value,
                password: this.formulario.get('password').value,
                dni: this.formulario.get('dni').value,
                nombre: this.formulario.get('nombres').value, 
                apellidos: this.formulario.get('apellidos').value,
                tipoUsuario: 'PACIENTE',
                role: {
                    id: 3
                }
            }
        }
        return paciente;
    }


    private redirigirLogin(resp:any){
    Swal.fire({
      title: resp.titulo,
      text: resp.mensaje,
      icon: resp.tipo,
      showCancelButton: false,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Ir al home'
    }).then((result) => {
      if (result.value) {
        this.route.navigate(['/']);
      }
    })
  }
 }