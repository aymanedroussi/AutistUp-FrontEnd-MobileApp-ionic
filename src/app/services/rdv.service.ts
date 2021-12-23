import { SpecialisteRdv } from './../models/specialisteRdv';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RdvService {

  constructor(private http :HttpClient) { }


  getAllSpecialistesRdv(){
    return this.http.get<SpecialisteRdv[]>(`${environment.apiBack_url}/specialisteRdv/getAll`);
  }

  addRdv(data:any){
    return this.http.post(`${environment.apiBack_url}/specialisteRdv/addRdv`,data);
  }
}
