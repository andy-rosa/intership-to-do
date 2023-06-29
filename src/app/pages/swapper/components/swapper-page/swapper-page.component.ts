import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, scan, Subject, switchMap, tap} from "rxjs";

@Component({
  selector: 'app-swapper-page',
  templateUrl: './swapper-page.component.html',
  styleUrls: ['./swapper-page.component.scss']
})
export class SwapperPageComponent {
  currentPage = 1;
  pageSize = 10;
  pageSubject = new Subject<number>();
  data$ = this.pageSubject.pipe(
    switchMap((page: number) =>
      this.http
        .get<any[]>(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${this.pageSize}`)
        .pipe(
          tap((data: any[]) => {
            if (data.length === 0) {
              this.currentPage--;
            }
          })
        )
    ),
    map((data: any[]) => data.map((item: any) => item.title)),
    scan((acc: any[], curr: any[]) => [...acc, ...curr], [])
  );

  constructor(private http: HttpClient) {}

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.pageSubject.next(this.currentPage);
    }
  }

  nextPage() {
    this.currentPage++;
    this.pageSubject.next(this.currentPage);
  }
}
