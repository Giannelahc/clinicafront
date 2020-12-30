import { Injectable } from '@angular/core';

import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment} from '../../environments/environment'
import { catchError, map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner'; 
import { Paciente } from '../models/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService { 

  constructor(private http: HttpClient,
    private spinner: NgxSpinnerService) { }

  registrarPaciente(paciente: Paciente) {
    this.spinner.show();
    return this.http.post( environment.urlBack + 'paciente/registrar',paciente).pipe(
      map( obj => {
        this.spinner.hide();
        return obj;
      }),
      catchError((err:HttpErrorResponse)=> this.errorHandler(err))
    );
  }

  private errorHandler(err: HttpErrorResponse) {
    this.spinner.hide();
    if (err.status == 0) {
      Swal.fire('Error', environment.msg_servicio_no_disponible, 'error')
    } else {
      Swal.fire('Error ' + err.status + ' ' + err.error.mensaje, 'Detalles: ' + err.error.error, 'error');
    }
    return Observable.throw(err);
  }
}
