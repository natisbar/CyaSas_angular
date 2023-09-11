import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { NosotrosComponent } from "./components/nosotros.component";
import { NosotrosRoutingModule } from "./nosotros-routing.module";

@NgModule({
  declarations: [
    NosotrosComponent,
  ],
  imports: [
    SharedModule,
    NosotrosRoutingModule,
  ],
  exports: [
  ],
  providers: [
  ]
})
export class NosotrosModule {}
