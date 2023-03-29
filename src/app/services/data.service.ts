import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  url = 'http://127.0.0.1:3000/maison/';


  create(maison:any){
    return this.http.post(this.url+'ajout', maison );
 
  } 

  getAll(){
    return this.http.get(this.url + 'all');
  }

  getMaisonById(id:any){
    return this.http.get(this.url + 'getbyid/' + id)
  }
  
}
