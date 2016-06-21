import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../components/shared/todo.model';
import { TodoService } from '../../components/shared/todo.service';

@Component({
  selector: 'todo-form',
  templateUrl: './app/components/todo-form/todo-form.component.html',
  styleUrls: ['./app/components/todo-form/todo-form.component.css'];
})

export class TodoFormComponent {
  @Output() added = new EventEmitter();

  constructor(private todoService: TodoService) {

  }

  add(title: string): void {
    if (title) {
      let todo = new Todo(title);
      this.todoService.addTodo(todo);
    }
  }
}
