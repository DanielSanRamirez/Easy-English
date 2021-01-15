import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';

const routes: Routes = [
  // Página principal
  {path: 'home', component: HomeComponent},

  // Ruta vacía
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  
  // Ruta no encontrada
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
