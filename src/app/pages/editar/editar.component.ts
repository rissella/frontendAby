import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';


import {formatDate} from '@angular/common';

import { FormGroup, FormControl } from '@angular/forms';//FormControl Formularios Reactivos
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { EstudianteService } from '../../sevices/estudiante.service';
import { Estudiante } from '../../models/estudiante.interface';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
  estudiantetId: string | null = null;
  estudiante: Estudiante = {
    id:              0,
    nombre:          "",
    fechaNacimiento: new Date,
    fechaInscripcion: new Date,
    edad:           0,
    costo:           0,
  };

  estudianteForm: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(4)]),
    fechaNacimiento: new FormControl('', [Validators.required]),
    fechaInscripcion: new FormControl('', [Validators.required]),
    edad:  new FormControl('', [Validators.required]),
    costo: new FormControl('', [Validators.required, Validators.min(0)],),
  });
  
  
  constructor(private estudianteService: EstudianteService, private _router: Router, private route:ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.estudiantetId =  params.get('id');
      if (this.estudiantetId) {
        this.estudianteService.getProduct(parseInt( this.estudiantetId)).subscribe(
          (data) => {
            this.estudiante = data
            this.asignarDatos(data)
          },
          (error: any) => {
            console.log(error);
          }
        )
      }
    })
  }

  asignarDatos(data:Estudiante){

    
    this.estudianteForm.setValue({
      nombre: data.nombre, 
      fechaNacimiento: formatDate(data.fechaNacimiento, 'yyyy-MM-dd', 'en-US') ,
      fechaInscripcion: formatDate(data.fechaInscripcion, 'yyyy-MM-dd', 'en-US'),
      edad: data.edad,
      costo: data.costo,
    }); 
}


  Editar() {
    this.estudianteService.update(parseInt( this.estudiantetId || ''),this.estudianteForm.value).subscribe(
      (res: any) => {
        alert("Datos actualizados correctamente")
      },
      (error: any) => {
        if (error.status == 422) {
          console.log(error);
          alert(error.error.mensaje)
        }
      }
    )
  }
}
