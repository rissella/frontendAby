import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { PagesRoutingModule } from './pages-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CrearComponent } from './crear/crear.component';
import { EditarComponent } from './editar/editar.component';
import { LayoutComponent } from './layout/layout.component';
import { EstudianteListComponent } from './estudiante-list/estudiante-list.component';
import { TablaComponent } from './components/tabla/tabla.component';


@NgModule({
  declarations: [
    NavComponent,
    SidebarComponent,
    CrearComponent,
    EditarComponent,
    LayoutComponent,
    EstudianteListComponent,
    TablaComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
