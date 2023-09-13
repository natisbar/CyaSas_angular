import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OptionSelect } from '../../shared/modelos/optionSelect';
import { HttpHeaders } from '@angular/common/http';
import { ClienteService } from '../shared/service/cliente.service';
import { environment } from 'src/environments/environment';
import Swal, { SweetAlertIcon } from 'sweetalert2';
import { ModalNotificaciones } from 'src/app/core/services/modal.service';

const SATISFACTORIO_ICON: SweetAlertIcon = 'success';
const ERROR_ICON: SweetAlertIcon = 'error';
const SOLICITUD_EXITOSA: string = 'Tu solicitud ha sido recibida exitosamente.';
const INFORMACION_INCOMPLETA: string = 'Por favor diligencie todos los campos marcados como obligatorios.';
const VALOR_POR_DEFECTO: string = "Selecciona Tipo de Certificación";
const OPTIONS_CERTIFICACION: OptionSelect[] = [
  {
    valor: "",
    texto: VALOR_POR_DEFECTO
  },
  {
    valor: "CCD",
    texto: "Certificado Consolidado de Deuda"
  },
  {
    valor: "CPT",
    texto: "Certificado Consolidado de Pagos a Terceros"
  },
  {
    valor: "CSA",
    texto: "Certificado de Socios y Accionistas"
  },
  {
    valor: "CEL",
    texto: "Certificado Laboral"
  },
  {
    valor: "CET",
    texto: "Certificado Tributario"
  }
];

const OPTIONS_IDENTIFICACION: OptionSelect[] = [
  {
    valor: "",
    texto: VALOR_POR_DEFECTO
  },
  {
    valor: "CC",
    texto: "CC - Cédula de Ciudadanía"
  },
  {
    valor: "CE",
    texto: "CE - Cédula de Extranjería"
  },
  {
    valor: "NIP",
    texto: "NIP - Número de Identificación Personal"
  },
  {
    valor: "NIT",
    texto: "NIT - Número de Identificación Tributaria"
  },
  {
    valor: "PAP",
    texto: "PAP - Pasaporte"
  }
];

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit{

  public formSolicitud: FormGroup;
  public opcionesCertificacion: OptionSelect[] = OPTIONS_CERTIFICACION;
  public opcionesIdentificacion: OptionSelect[] = OPTIONS_IDENTIFICACION;

  constructor(private clienteService: ClienteService,
              private modalNotificaciones: ModalNotificaciones){}

  async iniciarPeticionPost(){
    if (this.formSolicitud.valid){
      const body = new URLSearchParams();
      body.set('entry.422942856', this.formSolicitud.value.tipoCerficacion);
      body.set('entry.1522058984', this.formSolicitud.value.tipoIdentificacion);
      body.set('entry.1806434860', this.formSolicitud.value.identificacion);
      body.set('entry.100596304', this.formSolicitud.value.telefono);
      body.set('entry.60365055', this.formSolicitud.value.email);
      let options = {
        headers: new HttpHeaders().set(
          'Content-Type',
          'application/x-www-form-urlencoded'
        )
      };

      try {
        this.clienteService.guardar(environment.endpoint.form.certificado, body, options).subscribe({
          next: data => {
            console.log(data);
          },
          error: error =>{
            console.log(error);
            this.formSolicitud.reset();
            this.modalNotificaciones.modalBasico(SATISFACTORIO_ICON, SOLICITUD_EXITOSA)
          }
        })
      } catch (error) {
        console.log(error);
      }

    }
    else{
      this.modalNotificaciones.modalBasico(ERROR_ICON, INFORMACION_INCOMPLETA)
    }
  }

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
