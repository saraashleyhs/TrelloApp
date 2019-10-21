import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { ITodo } from '../interfaces/itodo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
@Input() todo: ITodo;
  constructor(private todoService: TodoService) { }

  ngOnInit() {}

  setDoing(): void{
    this.todo.isDoing = true;
  }
  setDone(): void{
    this.todo.isDone = true;
  }
  delete(): void{
    this.todoService.delete(this.todo);
  }
  toggleEdit(){
    this.todo.isEditing = !this.todo.isEditing;
  }

}
