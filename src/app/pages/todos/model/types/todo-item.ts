import {TodoStatus} from "./todo-status";

export class TodoItem {
  private _id: number;
  public title: string;
  private _status: TodoStatus;

  constructor(id: number, title: string, status: TodoStatus) {
    this._id = id;
    this.title = title;
    this._status = status;
  }

  get id(): number {
    return this._id;
  }

  get status(): TodoStatus {
    return this._status;
  }

  set status(value: TodoStatus) {
    this._status = value;
  }
}
