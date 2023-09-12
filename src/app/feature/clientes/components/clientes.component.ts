import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit{

  public formSolicitud: FormGroup;

  private construirFormulario(){
    this.formSolicitud = new FormGroup({
      tipoCerficacion: new FormControl("", Validators.required),
      tipoIdentificacion: new FormControl("", Validators.required),
      identificacion: new FormControl("", [Validators.required, Validators.min(100000)]),
      telefono: new FormControl("", [Validators.required, Validators.min(1000000000)]),
      email: new FormControl("", [Validators.required, Validators.email])
      // nombre: new FormControl("", [Validators.required, Validators.minLength(6), regularCharacterValidator()]),
    });
  }

  get tipoCerficacionField() { return this.formSolicitud.get('tipoCerficacion'); }
  get tipoIdentificacionField() { return this.formSolicitud.get('tipoIdentificacion'); }
  get identificacionField() { return this.formSolicitud.get('identificacion'); }
  get telefonoField() { return this.formSolicitud.get('telefono'); }
  get emailField() { return this.formSolicitud.get('email'); }

  ngOnInit(): void {
    this.construirFormulario();
  }

}
