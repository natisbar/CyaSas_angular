import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OptionSelect } from '../../shared/modelos/optionSelect';

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

  async iniciarPeticionPost(){
    console.log(this.formSolicitud.value);
    console.log(this.formSolicitud.valid);

    if (this.formSolicitud.valid){
      // const body = new URLSearchParams();
      // body.set('entry.41887965', this.formAplicacion.value.id);
      // body.set('entry.1256711967', this.formAplicacion.value.email);
      // body.set('entry.1626840047', this.formAplicacion.value.cedula);
      // body.set('entry.1959726330', this.formAplicacion.value.nombre);
      // body.set('entry.1289675046', this.formAplicacion.value.telefono);
      // let options = {
      //   headers: new HttpHeaders().set(
      //     'Content-Type',
      //     'application/x-www-form-urlencoded'
      //   )
      // };

      try {
        // this.ofertaService.guardar(environmentForm.endpoint, body, options).subscribe({
        //   next: data => {
        //     console.log(data);
        //   },
        //   error: error =>{
        //     console.log(error);
        //     this.mostrarForm = false;
        //   }
        // })
      } catch (error) {
        console.log("hubo error");
        console.log(error);
      }

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
