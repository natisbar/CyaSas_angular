import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClientesComponent } from './feature/clientes/clientes.component';
import { CoreModule } from './core/core.module';
import { HomeModule } from './feature/home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NosotrosModule } from './feature/nosotros/nosotros.module';
import { ServiciosModule } from './feature/servicios/servicios.module';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    NosotrosModule,
    HomeModule,
    ServiciosModule
  ],
  exports: [
    BrowserAnimationsModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
