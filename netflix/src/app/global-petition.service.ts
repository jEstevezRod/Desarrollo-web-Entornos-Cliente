import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class GlobalPetitionService {

  @Input() titulo;

  constructor(public http: HttpClient ) {}

  petition(){
    return this.http
    .get('http://www.omdbapi.com/?apikey=e06027ef&s='+ this.titulo )
  }
}
