
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { ClientesComponent } from "./components/clientes.component";
import { ClientesRoutingModule } from "./clientes-rounting.module";

@NgModule({
  declarations: [
    ClientesComponent,
  ],
  imports: [
    SharedModule,
    ClientesRoutingModule,
  ],
  exports: [
  ],
  providers: [
  ]
})
export class ClientesModule {}
