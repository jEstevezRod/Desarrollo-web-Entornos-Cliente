import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalPetitionService } from '../global-petition.service';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-movies',
  template: `
    <div class='box'>
      <img src="{{movie?.Poster}}"/>
      <p>{{movie?.Title}}</p>
    </div>

  `,
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  @Input() movie;



  constructor() {
  }

  ngOnInit() {
  
  }

}
