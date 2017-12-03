import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CollectService {
  headers;
  constructor(private http: HttpClient) { }
  newCollection(callback_fun, pub: boolean, name: String, descrip: String, image: String, creator: String){
    
    let body = ({       
      'open': pub,
      'name': name,
      'descrip': descrip,
      'picture': image,
      'creator': creator
    });
    console.log(body);
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    console.log(body);    
    this.http.post('/api/collections/', body, {headers: this.headers}).subscribe(data => {
      console.log(data);
      callback_fun(data.message);
    });
  } 
  getCollections(callback_fun, info: String){
    this.http.get('/api/collections/'+info).subscribe(data => {
      callback_fun(data);
    });
  }
}