import {Component, Inject} from '@angular/core';
import {TodoService} from "../todo.service";
import {TodoItem} from "../todo-item";
import {TodoStatus} from "../types/todo-status";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  private _todos: TodoItem[];

  constructor(@Inject(TodoService) public todoService: TodoService) {
    this._todos = todoService.getTodoItems();
  }

  get todos(): TodoItem[] {
    return this._todos
  }

  public addTodoItem({title, status}: {title: string, status: TodoStatus}): void {
    this.todoService.addTodoItem(title, status);
  }
}
