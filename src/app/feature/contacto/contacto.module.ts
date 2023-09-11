
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { ContactoComponent } from "./components/contacto.component";
import { ContactoRoutingModule } from "./contacto-routing.module";

@NgModule({
  declarations: [
    ContactoComponent,
  ],
  imports: [
    SharedModule,
    ContactoRoutingModule,
  ],
  exports: [
  ],
  providers: [
  ]
})
export class ContactoModule {}
