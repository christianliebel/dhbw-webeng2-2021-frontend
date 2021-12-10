import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) { }

  create(todo: Todo): Observable<Todo> {
    return this.httpClient.post<Todo>('http://localhost:3000/todos', todo);
  }

  get(todoId: number): Observable<Todo> {
    return this.httpClient.get<Todo>(`http://localhost:3000/todos/${todoId}`);
  }

  getAll(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>('http://localhost:3000/todos');
  }

  update(todo: Todo): Observable<void> {
    return this.httpClient.put<void>(`http://localhost:3000/todos/${todo.id}`, todo);
  }

  delete(todoId: number): Observable<void> {
    return this.httpClient.delete<void>(`http://localhost:3000/todos/${todoId}`);
  }
}
