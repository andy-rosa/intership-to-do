import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TodoItem} from "../../model/types/todo-item";
import {TodoStatus} from "../../model/types/todo-status";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {
  titleTask!: string;
  statusTask: TodoStatus = TodoStatus.Normal;

  addTodoForm!: FormGroup;

  ngOnInit(): void {
    this.addTodoForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required
      ]),
      status: new FormControl(TodoStatus.Normal, [
        Validators.required
      ])
    })
  }

  get title() {
    return this.addTodoForm.get('title')
  }

  get status() {
    return this.addTodoForm.get('status')
  }

  create() {
    if (this.addTodoForm.invalid) {
      return
    }
    const {title, status} = this.addTodoForm.value
    console.log(title, status)
    this.createTodoEvent.emit({
      title: title,
      status: status
    })
  }

  @Output()
  public createTodoEvent = new EventEmitter<Omit<TodoItem, 'id'>>();

  protected readonly TodoStatus = TodoStatus;
}
