import { Component, Input, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-movie',
  template: `  
    <div>
      <img src="{{movie?.Poster}}"/>
      <p>{{movie?.Title}}</p>
    </div>
`,
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() movie;

  constructor() { }

  ngOnInit() {
  }

}
