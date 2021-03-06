import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hallo!';
  color = 'hotpink';
  numericValue = 4.123456;
  myTodo = { name: "Wash clothes", done: false, id: 3 };
  show = true;
  todos: Todo[] = [];

  constructor(private todoService: TodoService, private authService: AuthService) {
    // Hier oben den Code weg
  }

  addTodo(name: string) {
    this.todoService.create({ name, done: false })
      .subscribe(() => this.requestTodos());
  }

  login() {
    this.authService.loginWithRedirect();
  }

  requestTodos() {
    this.todoService.getAll()
      .subscribe(todos => this.todos = todos);
  }

  onClick(event: MouseEvent) {
    alert(`${event.clientX},${event.clientY}`);
  }

  onMouseMove(event: MouseEvent) {
    console.log(`${event.clientX},${event.clientY}`);
  }

  onDone(event: any) {
    console.log(event);
  }
}