import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalPetitionService } from '../global-petition.service';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-movies',
  template: `
  <section>
    <app-movie *ngFor="let movie of movies" [movie]="movie"></app-movie>
  </section>

  `,
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  @Input() title;
  
  movies;

  constructor(public _GlobalPetitionService: GlobalPetitionService ) { 
  }

  ngOnInit() {
    this._GlobalPetitionService.petition().subscribe(
      data => { this.movies = data},
      err => console.error(err),
      () => console.log('done loading foods')
    );
  }

}
