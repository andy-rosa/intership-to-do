import {Component, Inject} from '@angular/core';
import {TodoService} from "../todo.service";
import {TodoItem} from "../todo-item";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  private todos: TodoItem[];

  constructor(@Inject(TodoService) public todoService: TodoService) {
    this.todos = todoService.getTodoItems();
  }
}
