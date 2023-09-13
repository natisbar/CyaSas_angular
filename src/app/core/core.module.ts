import { CommonModule} from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./components/footer/footer.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HttpGeneralService } from "./services/http-general.service";
import { ModalNotificaciones } from "./services/modal.service";


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    NavbarComponent,
    FooterComponent
  ],
  providers: [
    HttpGeneralService,
    ModalNotificaciones
  ]
})
export class CoreModule {}
