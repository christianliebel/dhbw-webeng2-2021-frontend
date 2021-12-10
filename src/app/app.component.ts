import { Component } from '@angular/core';

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