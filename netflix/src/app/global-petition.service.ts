import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class GlobalPetitionService {


  constructor(public http: HttpClient) { }

  petition(title, page) : Observable<any> {
    return this.http
      .get('http://www.omdbapi.com/?apikey=e06027ef&s=' + title + '&page=' + page)
  }
}
