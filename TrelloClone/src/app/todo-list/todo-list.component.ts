import { Component, OnInit, Input } from '@angular/core';
import { ITodo } from '../interfaces/itodo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() todos: ITodo[];
  constructor() { }

  ngOnInit() {
  }

}
