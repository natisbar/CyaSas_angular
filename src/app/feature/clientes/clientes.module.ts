
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { ClientesComponent } from "./components/clientes.component";
import { ClientesRoutingModule } from "./clientes-rounting.module";
import { ReactiveFormsModule } from "@angular/forms";
import { ClienteService } from "./shared/service/cliente.service";

@NgModule({
  declarations: [
    ClientesComponent,
  ],
  imports: [
    SharedModule,
    ClientesRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    ReactiveFormsModule
  ],
  providers: [
    ClienteService
  ]
})
export class ClientesModule {}
