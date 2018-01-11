import { Component, Input, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

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
