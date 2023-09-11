
import { NgModule } from "@angular/core";
import { HomeRoutingModule } from "./home-routing.module";
import { SharedModule } from "src/app/shared/shared.module";
import { HomeComponent } from "./components/home.component";

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    SharedModule,
    HomeRoutingModule,
  ],
  exports: [
  ],
  providers: [
  ]
})
export class HomeModule {}
