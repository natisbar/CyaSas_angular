import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'inicio',
    loadChildren: () => import('./feature/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'nosotros',
    loadChildren: () => import('./feature/nosotros/nosotros.module').then(m => m.NosotrosModule)
  },
  {
    path: 'servicios',
    loadChildren: () => import('./feature/servicios/servicios.module').then(m => m.ServiciosModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import('./feature/clientes/clientes.module').then(m => m.ClientesModule)
  },
  {
    path: 'contacto',
    loadChildren: () => import('./feature/contacto/contacto.module').then(m => m.ContactoModule)
  },
  {
    path: '**',
    redirectTo: '/inicio',
    // pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
              scrollPositionRestoration: 'enabled',
              anchorScrolling: 'enabled',
            })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
