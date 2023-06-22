import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TodoService} from "../../../../services/todo-service/todo.service";
import {TodoItem} from "../../model/types/todo-item";
import {TodoStatus} from "../../model/types/todo-status";
import {FilterStatus} from "../todo-search/todo-search.component";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent {
  private _todos: TodoItem[] = [];

  constructor(public todoService: TodoService) {
    this.todoService.fetchTodos();
  }

  get todos(): TodoItem[] {
    return this._todos
  }

  public addTodoItem({title, status}: {title: string, status: TodoStatus}): void {
    this.todoService.addTodoItem(title, status);
    this._todos = this.todoService.getTodoItems();
  }

  public changeTodoStatus({id, status}: {id: number, status: TodoStatus}): void {
    this.todoService.changeTodoStatus(id, status);
  }

  public removeTodoItem(id: number): void {
    this.todoService.removeTodoItem(id);
    this._todos = this.todoService.getTodoItems();
  }

  public filteredTodos(
    {searchTitle, filterStatus} : {
      searchTitle: string, filterStatus: FilterStatus
    }): TodoItem[] {
    this._todos = this.todoService.getTodoItems();

    if (!searchTitle && filterStatus === 'All') return this.todos

    if (!searchTitle) {
      this._todos = this.todos.filter(todo => {
        return todo.status === filterStatus
      })
      return this.todos
    }

    this._todos = this.todos
      .filter(todo => {
        if (filterStatus === 'All') return todo.title.includes(searchTitle)
        return todo.status === filterStatus && todo.title.includes(searchTitle)
      })

    return this.todos
  }
}
