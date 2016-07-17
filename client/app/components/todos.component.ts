import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../Todo';
import 'rxjs/add/operator/map';

@Component({
  moduleId: module.id,
  selector: 'todos',
  templateUrl: 'todos.component.html'
})

export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor (private _todoService: TodoService) {}
  ngOnInit() {
    this.todos = [];
    this._todoService.getTodos()
      .map(res => res.json())
      .subscribe(todos => this.todos = todos);
  }
/*
  addTodo($event, todoText) {
    // console.log(todoText.value);
    if ($event.which=1){
      // console.log(todoText.value);
      let results;
      let newTodo = {
        text.todoText.value,
        isCompleted: false;
      };
      results = this._todoServices.saveTodo(newTodo);
      results.subscribe(x => {
        this._todos.push(newTodo)
        todoText.value='';
      });
    }
  }
  */
  
}
