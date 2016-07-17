import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todos.service';
import { Todo } from '../Todo';
import 'rxjs/add/operator/map';

@Component({
  moduleId: module.id,
  selector: 'todos',
  templateUrl: 'todos.component.html'
})

export class TodosComponent implement OnInit {
  todos: Todo[];

  constructor (private _todoService: TodoService) {
  }

  ngOnInit() {
    this.todos = [];
    this._todoService.getTodos()
      .map(res => res.json())
      .subscribe(todos => this.todos = todos);
  }

}
