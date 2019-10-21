import { Component, OnInit, Input } from "@angular/core";
import { ITodo } from "./app/interfaces/itodo";
import { TodoService } from "./app/services/todo.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  newTodoTitle: string = "";
  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  addNew() {
    this.todoService.add(this.newTodoTitle);
    this.newTodoTitle = "";
  }

  get todoItems() {
    return this.todoService.getAll();
  }
  get doingItems() {
    return this.todoService.getIsDoing();
  }
  get doneItems() {
    return this.todoService.getDone();
  }
}
