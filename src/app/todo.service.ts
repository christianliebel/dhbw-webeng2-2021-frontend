import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  create(todo: Todo): Todo {
    return { name: 'Bügeln', done: false };
  }

  get(todoId: number): Todo {
    return { name: 'Bügeln', done: false };
  }

  getAll(): Todo[] {
    return [
      { name: 'Bügeln', done: true },
      { name: 'Auto waschen', done: false }
    ];
  }

  update(todo: Todo): void {}

  delete(todoId: number): void {}
}
