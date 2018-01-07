import { Component, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { MoviesComponent } from './movies/movies.component';
import { GlobalPetitionService } from './global-petition.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  template: `
  <label id="titulo" for="search">
    <span class="red">b</span>
    <span class="green">u</span>
    <span class="yellow">s</span>
    <span class="red">Q</span>
    <span class="green">u</span>
    <span class="yellow">e</span>
    <span class="red">d</span>
    <span class="green">a</span>
    <span id=peque>:</span> 
  </label>
  <input type="text" id="search"  value="" #searcher (change)="buscar($event.target.value)">
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
  public globalArray = [];
  public loading = false;
  public input;
  public search;
  public button;


  buscar($event) {
    this.globalArray = []
    this.page = 1;
    this.title = $event;
    this.Master();
  }

  constructor(public _GlobalPetitionService: GlobalPetitionService) {

  }

  ngOnInit() {
    var input = document.querySelector('.search-form');
    var search = document.querySelector('input')
    var button = document.querySelector('button');
    button.addEventListener('click', function(e) {
      e.preventDefault();
      input.classList.toggle('active');
    })
    search.addEventListener('focus', function() {
      input.classList.add('focus');
    })
    
    search.addEventListener('blur', function() {
      search.value.length != 0 ? input.classList.add('focus') : input.classList.remove('focus');
    })
  }

  Master() {
    this.loading = true;
    this._GlobalPetitionService.petition(this.title, this.page).subscribe(
      data => {
        this.movies = data;
        this.movies = Array.of(this.movies);
        for (let movie of this.movies[0].Search) {
          this.globalArray.push(movie);
        }
      },
      err => console.error("NEEEEEEEEEEEEENG", err),
      () => this.loading = false
    );

  }

  nextPage() {
    if (!this.loading) {
      this.page++;
      this.Master();
    }
  }


}
