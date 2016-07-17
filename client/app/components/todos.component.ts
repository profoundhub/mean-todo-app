import { Component } from '@angular/core';
import { TodoService } from '../services/todos.service';

@Component({
  moduleId: module.id,
  selector: 'todos',
  templateUrl: 'todos.component.html'
})

export class TodosComponent {
  constructor (private _todoService: TodoService) {
    todos: Todo[];
  }
}
