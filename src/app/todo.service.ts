import { Injectable } from '@angular/core';
import {TodoItem} from "./todo-item";
import {TodoStatus} from "./types/todo-status";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: TodoItem[] = []
  private _idCounter = 0;

  constructor() { }

  getTodoItems(): TodoItem[] {
    return this.todos
  }

  addTodoItem(title: string, status: TodoStatus = TodoStatus.Normal) {
    const newItem = new TodoItem(this._idCounter, title, status);
    this._idCounter++;
    this.todos.push(newItem)
  }

  removeTodoItem(id: number) {
    this.todos.filter(todo => todo.id !== id)
  }

  changeTodoStatus(id: number, newStatus: TodoStatus) {
    let index = this.todos.findIndex(todo => todo.id === id)
    if (index === -1) return
    this.todos[index].status = newStatus
  }

}
