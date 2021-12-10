import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  create(todo: Todo): Observable<Todo> {
    return of({ name: 'Bügeln', done: false });
  }

  get(todoId: number): Observable<Todo> {
    return of({ name: 'Bügeln', done: false });
  }

  getAll(): Observable<Todo[]> {
    return of([
      { name: 'Bügeln', done: true },
      { name: 'Auto waschen', done: false }
    ]);
  }

  update(todo: Todo): Observable<void> {
    return of();
  }

  delete(todoId: number): Observable<void> {
    return of();
  }
}
