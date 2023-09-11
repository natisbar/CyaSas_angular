import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeModule } from './feature/home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NosotrosModule } from './feature/nosotros/nosotros.module';
import { ServiciosModule } from './feature/servicios/servicios.module';
import { ClientesModule } from './feature/clientes/clientes.module';
import { ContactoModule } from './feature/contacto/contacto.module';

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
    ContactoModule
  ],
  exports: [
    BrowserAnimationsModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
