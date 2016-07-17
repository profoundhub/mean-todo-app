"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _this = this;
var core_1 = require('@angular/core');
var todos_service_1 = require('../services/todos.service');
var Todo_1 = require('../Todo');
require('rxjs/add/operator/map');
var TodosComponent = (function () {
    function TodosComponent() {
    }
    TodosComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'todos',
            templateUrl: 'todos.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], TodosComponent);
    return TodosComponent;
}());
exports.TodosComponent = TodosComponent;
implement;
core_1.OnInit;
{
    todos: Todo_1.Todo[];
    constructor(private, _todoService, todos_service_1.TodoService);
    {
    }
    ngOnInit();
    {
        this.todos = [];
        this._todoService.getTodos()
            .map(function (res) { return res.json(); })
            .subscribe(function (todos) { return _this.todos = todos; });
    }
}
//# sourceMappingURL=todos.component.js.map