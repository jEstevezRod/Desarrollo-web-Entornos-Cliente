import { Component, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { MoviesComponent } from './movies/movies.component';
import { GlobalPetitionService } from './global-petition.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  template: `
  <label for="search">Busqueda: </label>
    <input id="search" type=text value="" #searcher (change)="buscar($event.target.value)">
  <section id="canvas" infiniteScroll
  [infiniteScrollDistance]="1"
  [infiniteScrollThrottle]="50"
  (scrolled)="nextPage()"><app-movies *ngFor="let movie of globalArray" [movie]="movie"></app-movies>
  </section>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Output() MovieSearch: EventEmitter<any> = new EventEmitter();

  public title = "";
  public movies;
  public page = 1;
  public globalArray=[];

  buscar($event) {
    this.globalArray = []
    this.page=1;
    this.title = $event;
    this.Master();
  }

  constructor(public _GlobalPetitionService: GlobalPetitionService) {
    
  }

  ngOnInit() {
    
  }

  Master(){
    this._GlobalPetitionService.petition(this.title, this.page).subscribe(
      data => {
        this.movies = data;
        this.movies = Array.of(this.movies);
        for ( let movie of this.movies[0].Search){
          this.globalArray.push(movie);
        }
      },
      err => console.error("NEEEEEEEEEEEEENG",err),
      () => console.log('done loading movies')
    );

  }

  nextPage(){
    this.page++;
    this.Master();

  }
}
