import {Component, EventEmitter, Output} from '@angular/core';
import {TodoStatus} from "../../../../types/todo-status";

export type FilterStatus = TodoStatus | 'All';

@Component({
  selector: 'app-todo-search',
  templateUrl: './todo-search.component.html',
  styleUrls: ['./todo-search.component.scss']
})
export class TodoSearchComponent {
  searchTitleItem!: string;
  filterStatusItem: FilterStatus = 'All';

  @Output()
  public searchItemEvent = new EventEmitter<{
    searchTitle: string,
    filterStatus: FilterStatus
  }>();
  protected readonly TodoStatus = TodoStatus;
}
