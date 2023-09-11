import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { ServiciosComponent } from "./components/servicios.component";
import { ServiciosRoutingModule } from "./servicios-routing.module";

@NgModule({
  declarations: [
    ServiciosComponent,
  ],
  imports: [
    SharedModule,
    ServiciosRoutingModule,
  ],
  exports: [
  ],
  providers: [
  ]
})
export class ServiciosModule {}
