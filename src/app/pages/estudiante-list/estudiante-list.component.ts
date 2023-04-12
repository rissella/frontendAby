import { Component, OnInit } from '@angular/core';


import { Estudiante } from '../../models/estudiante.interface';
import { Router } from '@angular/router';

// service
import { EstudianteService } from '../../sevices/estudiante.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './estudiante-list.component.html',
  styleUrls: ['./estudiante-list.component.scss']
})
export class EstudianteListComponent implements OnInit{
  estudianteList: Estudiante[]=[];

  constructor(
    private estudianteService: EstudianteService,
    private _router:Router
  ) { }

  ngOnInit() {
    this.estudianteService.getAll().subscribe(dato=>{
      console.log(dato)
      this.estudianteList=dato
      console.log(this.estudianteList)
    },(error: any) => {
      console.log(error);
    }
    )

   

  }

  
  eliminar(id: number) {
    console.log('eliminar')
    this.estudianteService.delete(id).subscribe(
      (res: any)=> {
        alert(res.mensaje)
        this.ngOnInit();
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
