import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeModule } from './feature/home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NosotrosModule } from './feature/nosotros/nosotros.module';
import { ServiciosModule } from './feature/servicios/servicios.module';
import { ClientesModule } from './feature/clientes/clientes.module';
import { ContactoModule } from './feature/contacto/contacto.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    NosotrosModule,
    HomeModule,
    ServiciosModule,
    ClientesModule,
    ContactoModule,
    HttpClientModule
  ],
  exports: [
    BrowserAnimationsModule
  ],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
