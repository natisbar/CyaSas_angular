import { CommonModule} from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./components/footer/footer.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HttpGeneralService } from "./services/http-general.service";
import { ModalNotificaciones } from "./services/modal.service";
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ],
  exports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [
    HttpGeneralService,
    ModalNotificaciones
  ]
})
export class CoreModule {}
