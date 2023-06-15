import {Component, DoCheck, EventEmitter, Input, Output} from '@angular/core';
import {TodoItem} from "../todo-item";
import {TodoStatus} from "../types/todo-status";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements DoCheck{
  statusValue!: TodoStatus

  @Input() item!: TodoItem;

  @Output()
  public changeStatusEvent = new EventEmitter<{
    status: TodoStatus
    id: number
  }>();
  protected readonly TodoStatus = TodoStatus;

  ngDoCheck() {
    this.statusValue = this.item.status;
  }
}
