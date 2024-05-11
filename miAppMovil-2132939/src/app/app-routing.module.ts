import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'formulario',
    loadChildren: () => import('./formulario/formulario.module').then(m => m.FormularioPageModule)
  },
  {
    path: 'vista-detalles/:id', // Agrega ":id" para recibir el parámetro de ID
    loadChildren: () => import('./vista-detalles/vista-detalles.module').then(m => m.VistaDetallesPageModule)
  },
  {
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }



