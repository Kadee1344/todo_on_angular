import { Component, OnInit } from '@angular/core';

import { ITodo, Todo } from '../../components/shared/todo.model';
import { TodoItem } from '../../components/todo-item/todo-item.component';
import { TodoService } from '../../components/shared/todo.service';

@Component({
  selector: 'todo-list',
  templateUrl: './app/components/todo-list/todo-list.component.html',
  styleUrls: ['./app/components/todo-list/todo-list.component.css'],
  directives: [TodoItem];
})


export class TodoListComponent implements OnInit{
  todos: ITodo[];


  constructor(private todoService: TodoService) {
      this.todos = [];
  }

  ngOnInit() {
      this.todoService.getTodos().then(todos => this.todos = todos);
  }

  get sortedTodos(): ITodo[]{
    return this.todos.map((todo: Todo) => todo)
    .sort((a, b) => {
      if (a.title > b.title) return 1;
      else if (a.title < b.title) return -1;
      else return 0;
    })
    .sort((a, b) => {
      if (a.done && !b.done) return 1;
      else if (!a.done && b.done) return -1;
      else return 0;
    });
  }

  onTodoDeleted(todo: ITodo): void{
    this.todoService.deleteTodo(todo);
  }

}
