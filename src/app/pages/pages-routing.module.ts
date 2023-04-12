import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrearComponent } from './crear/crear.component';
import { EditarComponent } from './editar/editar.component';
import { LayoutComponent } from './layout/layout.component';
import { EstudianteListComponent } from './estudiante-list/estudiante-list.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: EstudianteListComponent },
      { path: 'crear', component: CrearComponent },
      { path: 'editar/:id', component: EditarComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
