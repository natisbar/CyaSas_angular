import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactoService } from '../shared/contacto.service';
import { ModalNotificaciones } from 'src/app/core/services/modal.service';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SweetAlertIcon } from 'sweetalert2';
import { regularCharacterValidator } from 'src/app/shared/form.validator';

const SATISFACTORIO_ICON: SweetAlertIcon = 'success';
const ERROR_ICON: SweetAlertIcon = 'error';
const SOLICITUD_EXITOSA: string = 'Tu solicitud ha sido enviada exitosamente.';
const INFORMACION_INCOMPLETA: string = 'Por favor diligencie todos los campos marcados como obligatorios.';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  public formContacto: FormGroup;

  constructor(private contactoService: ContactoService,
              private modalNotificaciones: ModalNotificaciones){}

  async iniciarPeticionPost(){
    if (this.formContacto.valid){
      const body = new URLSearchParams();
      body.set('entry.422942856', this.formContacto.value.asunto.toUpperCase());
      body.set('entry.1522058984', this.formContacto.value.nombre.toUpperCase());
      body.set('entry.1806434860', this.formContacto.value.apellido.toUpperCase());
      body.set('entry.100596304', this.formContacto.value.telefono);
      body.set('entry.60365055', this.formContacto.value.email);
      body.set('entry.1722485628', this.formContacto.value.mensaje);
      let options = {
        headers: new HttpHeaders().set(
          'Content-Type',
          'application/x-www-form-urlencoded'
        )
      };

      try {
        this.contactoService.guardar(environment.endpoint.form.contacto, body, options).subscribe({
          next: data => {
            console.log(data);
          },
          error: error =>{
            console.log(error);
            this.formContacto.reset();
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
    this.formContacto = new FormGroup({
      asunto: new FormControl("", Validators.required),
      nombre: new FormControl("", [Validators.required, Validators.minLength(3), regularCharacterValidator()]),
      apellido: new FormControl("", [Validators.required, Validators.minLength(3), regularCharacterValidator()]),
      telefono: new FormControl("", [Validators.required, Validators.min(1000000000)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      mensaje: new FormControl("", Validators.required)
    });
  }

  get asuntoField() { return this.formContacto.get('asunto'); }
  get nombreField() { return this.formContacto.get('nombre'); }
  get apellidoField() { return this.formContacto.get('apellido'); }
  get telefonoField() { return this.formContacto.get('telefono'); }
  get emailField() { return this.formContacto.get('email'); }
  get mensajeField() { return this.formContacto.get('mensaje'); }

  ngOnInit(): void {
    this.construirFormulario();
  }

}
