import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TodoItem} from "../../../../todo-item";
import {TodoStatus} from "../../../../types/todo-status";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() item!: TodoItem;

  @Output()
  public changeStatusEvent = new EventEmitter<{
    status: TodoStatus
    id: number
  }>();

  @Output()
  public deleteTodoEvent = new EventEmitter<number>()

  protected readonly TodoStatus = TodoStatus;

}
