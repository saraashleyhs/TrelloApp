import { Injectable } from "@angular/core";
import { ITodo } from "../interfaces/itodo";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  constructor() {}

  //seed data for functionality to start
  todoList: ITodo[] = [
    {
      id: 1,
      title: "Learn Angular",
      isDone: false,
      isDoing: false,
      isEditing: false
    },
    {
      id: 2,
      title: "Finish Trello App",
      isDone: false,
      isDoing: false,
      isEditing: false
    },
    {
      id: 3,
      title: "Grade Papers",
      isDone: false,
      isDoing: false,
      isEditing: false
    }
  ];
  //all of the actions that can happen to a todo item, changing status, adding, deleting, updating CRUDL
  getAll(): ITodo[] {
    return this.todoList;
  }

  getDone(): ITodo[] {
    return this.todoList.filter(done => done.isDone);
  }

  getIsDoing(): ITodo[] {
    return this.todoList.filter(doing => doing.isDoing);
  }

  getEditing(): ITodo[] {
    return this.todoList.filter(edit => edit.isEditing);
  }

  add(title: string): void {
    const newId =
      this.todoList
        .map(x => x.id)
        .reduce((prev, curr) => (prev < curr ? curr : prev)) + 1;//this determines what the id is and increments to the next to give to the todo item that will be added in the next step.

    this.todoList.push({
      id: newId,
      title: title,
      isDoing: false,
      isDone: false,
      isEditing: false
    });
  }

  delete(todo: ITodo): void {
    var index = this.todoList.findIndex(todo => todo === todo);
    this.todoList.splice(index, 1);
  }

}
