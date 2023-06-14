import {Component, Input} from '@angular/core';
import {TodoItem} from "../todo-item";
import {TodoStatus} from "../types/todo-status";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() item!: TodoItem;
  protected readonly TodoStatus = TodoStatus;
}
