import { Component } from '@angular/core';
import { MenuItem } from './core/modelos/menu-tems';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CyaSas_angular';
  public opciones: MenuItem[] = [
    {url: '/', nombre: 'Inicio'},
    {url: 'nosotros', nombre: 'Nosotros'},
    {url: 'servicios', nombre: 'Servicios'},
    {url: 'clientes', nombre: 'Clientes'}
  ];

  public opcionesSubitem: MenuItem[] = [
    {url: 'consultaria-empresarial', nombre: 'Consultoría empresarial'},
    {url: 'consultaria-financiera', nombre: 'Consultoría Financiera y Tributaria'},
    {url: 'auditoria-revisoria', nombre: 'Auditoría y Revisoría Fiscal'}
  ];
}
