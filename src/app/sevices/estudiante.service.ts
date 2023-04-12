import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';

import { Estudiante} from '../models/estudiante.interface';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  private listProduct:Estudiante[] = [];
  private productsBS = new BehaviorSubject<Estudiante[]>(this.listProduct);
  
  productsBS$= this.productsBS.asObservable()

  private apiUrl = 'http://localhost:4000/api/v1';

  constructor(
    private http: HttpClient
  ) { }



  getAll() {
    return this.http.get<Estudiante[]>(`${this.apiUrl}/estudiante`)
  }
  
  getProduct(id: number){
    return this.http.get<Estudiante>(`${this.apiUrl}/estudiante/${id}`);
  }

  create(dto: Estudiante) {
    return this.http.post<Estudiante>(`${this.apiUrl}/estudiante`, dto);
  }

  update(id: number , dto: Estudiante) {
    return this.http.put<Estudiante>(`${this.apiUrl}/estudiante/${id}`, dto);
  }

  delete(id: number) {
    return this.http.delete<boolean>(`${this.apiUrl}/estudiante/${id}`);
  }

}
