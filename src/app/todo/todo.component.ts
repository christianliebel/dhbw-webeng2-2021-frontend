import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() public todo: any;

  @Output()
  public done = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
