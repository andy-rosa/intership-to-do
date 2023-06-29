import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-films-page',
  templateUrl: './films-page.component.html',
  styleUrls: ['./films-page.component.scss']
})
export class FilmsPageComponent implements OnInit {
  films$!: Observable<any>;
  filteredFilms$!: Observable<any[]>;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.films$ = this.http.get('https://swapi.dev/api/films/');

    this.filteredFilms$ = this.films$.pipe(
      map(response => response.results),
      map((films: any[]) =>
        films.sort((a, b) => a["episode_id"] - b["episode_id"])
      ),
      map((films) =>
        films.map((film) => ({
          title: film.title, releaseYear: film.release_year
        }))
      )
    );
  }
}
