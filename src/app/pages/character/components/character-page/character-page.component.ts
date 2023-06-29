import { Component } from '@angular/core';
import {debounceTime, distinctUntilChanged, filter, map, Subject, switchMap} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.scss']
})
export class CharacterPageComponent {
  searchSubject = new Subject<string>();
  filteredCharacters$ = this.searchSubject.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    switchMap((fragment: string) => this.http.get<{ results: any[]}>(`https://swapi.dev/api/people/?search=${fragment}`)),
    map(x => x.results),
    filter((characters: any[]) => characters.length > 0),
    map((characters) => characters.map((character) => ({ name: character.name, height: character.height })))
  );

  constructor(private http: HttpClient) {}

  searchCharacters(fragment: any) {
    this.searchSubject.next(fragment.value);
  }
}
