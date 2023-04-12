import { Component, Input } from '@angular/core';

import { Estudiante } from '../../../models/estudiante.interface';
import { EstudianteService } from '../../../sevices/estudiante.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent {
  estudiante: Estudiante[]=[];
  @Input('estudianteList')
  set cargarLista(products: Estudiante[]) {
    this.estudiante = products;
  }

  constructor(private estudianteService:EstudianteService, private _router:Router){}

  eliminar(id: number) {
    console.log('eliminar')
    this.estudianteService.delete(id).subscribe(
      (res: any)=> {
        alert(res.mensaje)
        this._router.navigate(["/home"])
    },
    (error:any)=>{
      if(error.status==422){
         console.log(error);  
         alert(error.error.mensaje)  
      }     
    }
    )
  }
}
