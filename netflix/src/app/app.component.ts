import {Component, Output, EventEmitter} from '@angular/core';
import {GlobalPetitionService} from './global-petition.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
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
