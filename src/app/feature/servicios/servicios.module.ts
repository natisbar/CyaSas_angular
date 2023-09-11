import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { ServiciosComponent } from "./components/servicios.component";
import { ServiciosRoutingModule } from "./servicios-routing.module";
import { NgxPageScrollCoreModule } from "ngx-page-scroll-core";

@NgModule({
  declarations: [
    ServiciosComponent,
  ],
  imports: [
    SharedModule,
    ServiciosRoutingModule,
    NgxPageScrollCoreModule
  ],
  exports: [
  ],
  providers: [
  ]
})
export class ServiciosModule {}
