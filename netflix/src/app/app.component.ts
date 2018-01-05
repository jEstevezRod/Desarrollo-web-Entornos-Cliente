import { Component } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-root',
  template: `
  <label for="search">Busqueda: </label>
    <input id="search" type=text #searcher (change)="buscar($event.target.value)">
  <app-movies [title]="title"></app-movies>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title;

  buscar($event) {
    this.title = $event;
    console.log(this.title);
  }
}
