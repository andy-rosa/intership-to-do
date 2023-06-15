import {Component, EventEmitter, Output} from '@angular/core';
import {TodoItem} from "../todo-item";
import {TodoStatus} from "../types/todo-status";

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent {
  titleTask!: string;
  statusTask: TodoStatus = TodoStatus.Normal;

  @Output()
  public createTodoEvent = new EventEmitter<Omit<TodoItem, 'id'>>();

  protected readonly TodoStatus = TodoStatus;
}
