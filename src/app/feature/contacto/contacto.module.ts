
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { ContactoComponent } from "./components/contacto.component";
import { ContactoRoutingModule } from "./contacto-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { ContactoService } from "./shared/contacto.service";

@NgModule({
  declarations: [
    ContactoComponent
  ],
  imports: [
    SharedModule,
    ContactoRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    ReactiveFormsModule
  ],
  providers: [
    ContactoService
  ]
})
export class ContactoModule {}
