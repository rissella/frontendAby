import { Component } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';//FormControl Formularios Reactivos
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { EstudianteService } from '../../sevices/estudiante.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent {
  constructor(private estudianteService:EstudianteService,  private _router:Router, ){

  }

  estudianteForm: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(4)]),
    fechaNacimiento: new FormControl('', [Validators.required]),
    fechaInscripcion: new FormControl('', [Validators.required]),
    edad:  new FormControl('', [Validators.required]),
    costo: new FormControl('', [Validators.required, Validators.min(0)],),
  });


  crear(){
    this.estudianteService.create(this.estudianteForm.value).subscribe(
      (res: any)=> {
    
           this._router.navigate(["/"])
        
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
