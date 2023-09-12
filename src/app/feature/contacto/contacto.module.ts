
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { ContactoComponent } from "./components/contacto.component";
import { ContactoRoutingModule } from "./contacto-routing.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    ContactoComponent,
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
  ]
})
export class ContactoModule {}
