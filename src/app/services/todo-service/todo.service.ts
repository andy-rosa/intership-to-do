import { Injectable } from '@angular/core';
import {TodoItem} from "../../pages/todos/model/types/todo-item";
import {TodoStatus} from "../../pages/todos/model/types/todo-status";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: TodoItem[] = []
  private _idCounter = 4;

  constructor(
    private http: HttpClient
  ) { }

  fetchTodos() {
    this.http.get<TodoItem[]>('../../assets/todo-list.json').subscribe(todos => {
      this.todos = todos
    })
  }

  getTodoItems(): TodoItem[] {
    return [...this.todos]
  }

  addTodoItem(title: string, status: TodoStatus = TodoStatus.Normal) {
    const newItem = new TodoItem(this._idCounter, title, status);
    this._idCounter++;
    this.todos = [...this.todos, newItem]
  }

  removeTodoItem(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id)
    return this.todos
  }

  changeTodoStatus(id: number, newStatus: TodoStatus) {
    let index = this.todos.findIndex(todo => todo.id === id)
    if (index === -1) return
    this.todos[index].status = newStatus
  }

}
